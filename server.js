const express = require('express');
const bodyparser = require('body-parser');
const app =express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.listen(3000,'0.0.0.0',()=>
{
 console.log('server started at 3000'); 
})