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
const API_KEY = process.env.API_KEY;
const langAndUrlInput = "&lang=auto&url="

console.log(`API Key: ${API_KEY}`);


app.get("/", (req, res) => {
    res.sendFile("index.html",{ root: __dirname });
});

app.post("/article", async (req, res) => {
    const resp = await fetch(`${baseUrl}${API_KEY}${langAndUrlInput}${req.body}`);
    console.log(resp);
    try {
        const data = await response.json();
        res.send(data);
    } catch (err){
        console.log("error: ", err);
    }
});

// Designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log("Example app listening on port 8080! Go to http://localhost:8080")
})