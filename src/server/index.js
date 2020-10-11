// From Course Lectures
const mockAPIResponse = require('./mockAPI.js');

// Set up Express Variables
const path = require('path');
const express = require('express');
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Set up Middleware
app.use(express.static('dist'));
app.use(bodyParser.text());
app.use(cors());

// Define dotenv
const dotenv = require('dotenv');
dotenv.config();

//Define API Call Variables
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key="
const textJSON = "&of=json&txt="
const API_KEY = process.env.API_Key;
const lang = "&lang=auto"
const userInput = "&url="
console.log(`API Key: ${API_KEY}`);


app.get("/", (req, res) => {
    res.sendFile("dist/index.html");
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

app.post("/article", async (req, res) => {
    const response = await fetch(`${baseUrl}${API_KEY}${lang}${userInput}${req.body}`);
    console.log(response);
    try {
        sentimentData = await response.json();
        res.send(sentimentData);
    } catch (error){
        console.log("error: ", error);
    }
});

// Designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log("Example app listening on port 8080! Go to http://localhost:8080")
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })