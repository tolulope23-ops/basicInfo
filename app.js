const express = require('express');
const app = express();
const cors = require("cors");
const {StatusCodes} = require('http-status-codes');

// Load environment variables from .env file
require("dotenv").config();

// Middlware to parse incoming JSON request
app.use(express.json());  

// Enable CORS to allow request from different origin
app.use(cors());    

const PORT = process.env.PORT || 3000;

// Get route for public-basic-information-api
app.get('/', (req, res) => {
    res.status(StatusCodes.OK).json({
        email: 'adeyemitoluadedoyin@gmail.com',
        current_datetime: new Date().toISOString(),
        github_url:'https://github.com/tolulope23-ops/publicApi.git'
    });
});

// Start the server and listen on the defined port
app.listen(PORT, () =>{
    console.log(`Server is listening on PORT ${PORT}`);
})