const express = require('express');
const port = 8080;
const app = express();

app.use(express.static('public'));

//need to get controllers here app.post...
const model = require('./db/purchases');

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
});


