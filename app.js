const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

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
