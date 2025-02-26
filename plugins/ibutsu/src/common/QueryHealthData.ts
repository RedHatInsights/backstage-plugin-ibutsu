import { useState, useEffect } from "react";
import { useApi, fetchApiRef, configApiRef } from "@backstage/core-plugin-api";

export const queryHealthData = () => {

    const [infoData, setInfoData] = useState<any[]>([]);
    const [showHealthDataError, setShowHealthDataError] = useState(false);

    const fetchApi = useApi(fetchApiRef);
    const config = useApi(configApiRef);

    const apiBaseUrl = () => {
        const baseUrl: string = config.getString('backend.baseUrl');
        return `${baseUrl}/api/proxy/ibutsu/api`;
    }

    const healthUrl = `${apiBaseUrl()}/health/info`;

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
        }).catch(error => {
            setShowHealthDataError(true);
            console.error('error fetching health data from Ibutsu API:', error);
        });
    }

    useEffect(() => {
        getHealthData();
    }, [healthUrl]);

    return { infoData, showHealthDataError };
};
