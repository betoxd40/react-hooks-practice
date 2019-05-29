import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {

    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Could not fetch person!');
                }
                return response.json();
            })
            .then(data => {
                setIsLoading(false);
                setFetchedData(data)
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err);
            });
    }, dependencies);

    return [isLoading, fetchedData];
};
