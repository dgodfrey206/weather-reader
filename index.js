const fs = require("node:fs");

async function getCurrentTemperature(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=787ffdb3615540a4b6c20803260411&q=${encodeURIComponent(city)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();

        return result.current.temp_f;
    } catch (error) {
        console.error(error.message);
    }
}

const city = "New York";
getCurrentTemperature(city).then(data => {
    fs.writeFile("./output", `It is currently ${data} degrees in ${city}`, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("File written successfully");
        }
    });
});

