const axios = require('axios');

// Define your API token
const apiToken = "VKNn8xrjckqi04hA3tFcEBm4yy6FWcyU8ZjvN49v";

// Define the URL for the Kintone API
const url = "https://marijjovi.kintone.com/k/v1/records.json";

// searchForJson: takes in ingredients (array), cook_time (integer), and avoid (array) and makes an API request
const searchForJson = async (ingredients, cookTime, avoid) => {
    // Build the query conditions
    let queryConditions = [];
    if (ingredients) {
        queryConditions = [...queryConditions, ...ingredients.map(ingredient => `ingredients like "%${ingredient}%"`)];
    }
    if (avoid) {
        queryConditions = [...queryConditions, ...avoid.map(allergy => `ingredients not like "%${allergy}%"`)];
    }
    if (cookTime !== 0) {
        queryConditions.push(`time <= ${cookTime}`);
    }

    const query = queryConditions.join(' and ');

    // Define the parameters for your request
    const params = {
        app: 1,
        query: `(${query})`
    };

    // Define the headers with the API token
    const headers = {
        "X-Cybozu-API-Token": apiToken
    };

    try {
        // Make the GET request to the Kintone API
        const response = await axios.get(url, { params, headers });

        // Handle the response
        if (response.status === 200) {
            // Parse the JSON response
            const data = response.data;
        
            // Print or return the retrieved data
            console.log(data);
        } else {
            // Print an error message if the request was not successful
            console.log("Error:", response.status);
        }
    } catch (error) {
        console.error("Error in API request:", error.message);
    }
};

module.exports = searchForJson;

