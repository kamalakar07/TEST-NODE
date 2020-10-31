require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const routeA = require('./routers/routeA.js');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('Hello')
});

app.use('/routeA',routeA);

app.listen(3000,()=>{
    console.log("Listening on port 3000")
   
})

// console.log("~"+process.env.MY_CONST_A+"~");
// console.log("~"+process.env.MY_CONST_B+"~");
// console.log("~"+process.env.MY_CONST_C+"~");

