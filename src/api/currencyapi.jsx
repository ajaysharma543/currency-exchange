import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchCurrencyData() {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
                const result = await response.json();
                setData(result.rates); 
            } catch (error) {
                console.error("Failed to fetch currency data:", error);
            }
        }

        fetchCurrencyData();
    }, [currency]);
    return data; 
}

export default useCurrencyInfo;
