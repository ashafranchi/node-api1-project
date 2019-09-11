// implement your API here
const express = require('express');

// creates an express application using the express module
const server = express();

// configures our server to execute a function for every GET request to "/"
// the second argument passed to the .get() method is the "Route Handler Function"
// the route handler function will run on every GET request to "/"
server.get('/', (req, res) => {
  // express will pass the request and response objects to this function
  // the .send() on the response object can be used to send a response to the client
  res.send('Hello World');
});
server.get('/onedirection', (req, res) => {
    const onedirection = [
        {
            id: 1,
            name: "Harry Styles"
        },
        {
            id: 2,
            name: "Louis Tomlinson"
        },
        {
            id: 3,
            name: "Niall Horan"
        },
        {
            id: 4,
            name: "Zayn Malik"
        },
        {
            id: 5,
            name: "Liam Payne"
        },
    ];
    res.status(200).json(onedirection);
});
server.listen(8000, () => console.log("API running on port 8000"));