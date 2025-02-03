const express = require('express');
const app = express();
const cors = require("cors");
const {StatusCodes} = require('http-status-codes');

require("dotenv").config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "basic information",
        status: StatusCodes.OK,
        data:{
            email: 'adeyemitoluadedoyin@gmail.com',
            current_datetime: new Date().toISOString(),
            github_url:'https://github.com/tolulope23-ops/publicApi.git'
        }
    });
});

app.listen(PORT, () =>{
    console.log(`Server is listening on PORT ${PORT}`);
})