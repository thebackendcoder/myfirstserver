const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const reg= require('./register/register.js')
app.use(express.json());
app.post('/register', reg.register, function(req, res){
    res.send({
        "message":"you have successfuly registered"
    })
})
const port = process.env.port || 3000;
app.listen(port, function(){
console.log("i am listening at port 3000")
});

