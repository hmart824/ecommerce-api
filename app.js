const express = require('express');
const port = 6000;
const app = express();
const db = require('./config/mongoose');
const bodyParser = require('body-parser');

// app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

//setup routes
app.use('/' , require('./routes'));

app.listen(port, (error)=>{
    if(error) console.log("error in starting the server.");
    console.log(`Server is running on : ${port}`);
});