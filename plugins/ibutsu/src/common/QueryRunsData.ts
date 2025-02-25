import { useState, useEffect } from "react";
import { useApi, fetchApiRef, configApiRef } from "@backstage/core-plugin-api";
import { useEntity } from "@backstage/plugin-catalog-react";

export const queryRunsData = () => {

    const [results, setResults] = useState<any[]>([]);
    const [showRunsDataError, setShowRunsDataError] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchApi = useApi(fetchApiRef);
    const config = useApi(configApiRef);
    const { entity } = useEntity();

    const apiBaseUrl = () => {
        const baseUrl: string = config.getString('backend.baseUrl');
        return `${baseUrl}/api/proxy/ibutsu/api`;
    }

    const appName = () => {
        // Some component names don't match the app's name
        if (entity?.metadata?.annotations?.["ibutsu/component-name"]) {
            return entity?.metadata?.annotations?.["ibutsu/component-name"]
        }

        return entity?.metadata?.name.substring(0, entity?.metadata?.name.indexOf("-"));
    }

    const runsUrl = `${apiBaseUrl()}/run?${new URLSearchParams({
        'filter': `component=${appName()}`,
        'page': 1,
        'pageSize': 50,
    })}`;

    const getRunsData = async () => {
        fetchApi.fetch(runsUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok ${response.statusText}`);
            }

            return response.json();
        }).then(data => {
            const appRuns = data.runs;

            if (appRuns.length === 0) {
                throw new Error(
                    `No test runs data was returned from the Ibutsu API`);
            }

            setResults(appRuns.filter(d => d.component === appName()))
        }).catch(error => {
            setShowRunsDataError(true);
            console.error('Error fetching test run data from Ibutsu API:', error);
        }).finally(() => {
            setLoading(false)
        });
    }

    useEffect(() => {
        getRunsData()
    }, [runsUrl]);

    return { results, showRunsDataError, loading };
};
