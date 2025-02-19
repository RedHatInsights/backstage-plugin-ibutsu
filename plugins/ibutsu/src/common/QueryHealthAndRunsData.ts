import { useState, useEffect } from 'react';
import { useApi, configApiRef, fetchApiRef } from '@backstage/core-plugin-api';
import { useEntity } from '@backstage/plugin-catalog-react';

export const queryHealthAndRunsData = () => {

    const [results, setResults] = useState<any[]>([]);
    const [infoData, setInfoData] = useState<any[]>([]);
    const [showHealthDataError, setShowHealthDataError] = useState(false);
    const [showRunsDataError, setShowRunsDataError] = useState(false);
    const [loading, setLoading] = useState(true);

    const config = useApi(configApiRef);

    const { entity } = useEntity();
    const fetchApi = useApi(fetchApiRef);

    const appName = () => {
        // Some component names don't match the app's name
        if (entity?.metadata?.annotations?.["ibutsu/component-name"]) {
            return entity?.metadata?.annotations?.["ibutsu/component-name"]
        }

        return entity?.metadata?.name.substring(0, entity?.metadata?.name.indexOf("-"));
    }

    const apiBaseUrl = () => {
        const baseUrl: string = config.getString('backend.baseUrl');
        return `${baseUrl}/api/proxy/ibutsu/api`;
    }

    const healthUrl = `${apiBaseUrl()}/health/info`;
    const runsUrl = `${apiBaseUrl()}/run?${new URLSearchParams({
        'filter': `component=${appName()}`,
        'page': 1,
        'pageSize': 50,
    })}`;

    const getHealthData = async () => {
        await fetchApi.fetch(healthUrl, {
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
            setInfoData(data.frontend);
            console.log(infoData);
        }).catch(error => {
            setShowHealthDataError(true);
            console.error('error fetching health data from Ibutsu API:', error);
        });
    }

    const getRunsData = async () => {
        fetch(runsUrl, {
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
            console.log(data);
        }).catch(error => {
            setShowRunsDataError(true);
            console.error('Error fetching test run data from Ibutsu API:', error);
        }).finally(() => {
            setLoading(false)
        });
    }

    useEffect(() => {
        getHealthData();
        getRunsData();
    }, [healthUrl, runsUrl]);

    return { results, infoData, showHealthDataError, showRunsDataError, loading };
}
