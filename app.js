const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

var cors = require("cors");
app.use(cors());
app.listen(PORT, (error) => {
    if (!error) 
        console.log('Server is successfully running, and App is listening on Port ' + PORT);
    else
        console.log('Error in running the server');
    }
);

app.get('/hello', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello World!</h1>");
});


app.get('/', (req, res) => {
    res.send('Hello World');
    res.status(200);
});

const path = require('path')

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
})
