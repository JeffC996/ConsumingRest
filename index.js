const axios = require('axios');

const fetchQuote = async (apiUrl) => {
    try {
        const response = await axios.get(apiUrl);
        console.log("Fetched quote:", response.data);
    } catch (error) {
        console.error("Error fetching quote:", error.response.status);
    }
};

const main = async () => {
    const baseUrl = process.env.quoters_base_url || "http://localhost:8080";
    const endpoints = ["/api/random", "/api/1", "/api/2", "/api/3"];

    for (const endpoint of endpoints) {
        await fetchQuote(`${baseUrl}${endpoint}`);
    }
};

main();
