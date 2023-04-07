const express = require("express"); // initialize express package
const app = express(); // get all properties & methods of express
let PORT = 5000;

// route

app.get("/", (req, res) => {
    res.send("Email Sending using nodejs");
});

// define controller 

const sendMail = require('./app/controller/emailSendController');

// Email sending route

app.get("/send-email", sendMail); // sendMail is controller name

// listen the req in port 5000
const Start = async() => {
      try{
             app.listen(PORT, () => {
                  console.log('Server is running on port - '+PORT);
             });
      }
      catch(err){
                console.log(err);
      }
}

Start();