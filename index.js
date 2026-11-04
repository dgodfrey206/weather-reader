const fs = require("node:fs");

async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();

        fs.writeFile("./output", `It is currently ${result.current.temp_f} degrees in New York`, err => {
            if (err) {
                console.error(err);
            } else {
                console.log("File written successfully");
            }
        })
    } catch (error) {
        console.error(error.message);
    }
}

getData("https://api.weatherapi.com/v1/current.json?key=787ffdb3615540a4b6c20803260411&q=New%20York");