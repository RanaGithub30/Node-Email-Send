const express = require("express");
const app = express();
require('dotenv').config();

const sendMail = require('./app/controller/emailSendController');

app.get("/", sendMail);

const PORT = process.env.PORT || 3000;

const Start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("Error starting server:", err);
    }
};

Start();