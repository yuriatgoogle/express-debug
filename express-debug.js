require('@google-cloud/trace-agent').start();

//function for randomizing
function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

//for outbound HTTP
const options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
  };

const express = require('express');
const app = express();
const got = require('got');
const http = require('http');

app.get('/', (req, res) => {
    
    var sleepInt = randomInt(1,10);
	var sleepVar = require ('sleep');
    sleepVar.sleep(sleepInt); 
    
    //return response
	res
        .status(200)
        .send("Thank you for using Stackdriver Trace!")
        //.send("I slept for " + sleepInt + " seconds before responding")
        .end();
    });

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server running at http://127.0.0.1:8080/");
  console.log('Press Ctrl+C to quit.');
});