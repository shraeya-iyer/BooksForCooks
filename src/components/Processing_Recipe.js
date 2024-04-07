async function processingRecipe(name, diff = null, ingred = null, steps = null, time = null, author = null) {
    const apiToken = "VKNn8xrjckqi04hA3tFcEBm4yy6FWcyU8ZjvN49v";
    const url = "https://marijjovi.kintone.com/k/v1/record.json";
    const data = {
        "app": 1,
        "record": {
            "name": { "value": name },
            "difficulty": { "value": diff },
            "ingredients": { "value": ingred },
            "steps": { "value": steps },
            "time": { "value": time },
            "author": { "value": author }
        }
    };

    const headers = {
        "X-Cybozu-API-Token": apiToken,
        "Content-Type": "application/json"
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error(error);
    }
}
