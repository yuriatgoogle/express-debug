// Load the http module to create an http server.
var http = require('http');
var sleep = require ('sleep');

//function for randomizing
function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  //console.log("Random number is " + randomInt(1,5));
  var sleepInt = randomInt(1,5);
  console.log("random number is now " + sleepInt);
  sleep.sleep(sleepInt);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("I slept for " + sleepInt + " seconds");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");