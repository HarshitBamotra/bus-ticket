require("./db/conn");

const express = require('express');
const PORT = require('./config/server.config');
const router = require('./routes');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', router);




app.listen(PORT , ()=>{
    console.log(`server running on port ${PORT}`);
});