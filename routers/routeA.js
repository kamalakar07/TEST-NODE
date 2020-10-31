const express = require('express');
const router = express.Router();

router.get('/a',(req,res)=>{
    res.send('From routeA');
})

router.post('/a',(req,res)=>{
    console.log(req.body);
    res.json(req.body);    
})

module.exports = router;