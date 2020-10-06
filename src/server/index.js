let path = require('path')
const express = require('express')
const app = express()
const mockAPIResponse = require('./mockAPI.js')


// Define dotenv
const dotenv = require('dotenv');
dotenv.config();
console.log(`API Key: ${process.env.API_KEY}`);

app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
