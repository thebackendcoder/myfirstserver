const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("hey baby welcome to the home page ")
})

const port = process.env.port || 3000;
app.listen('3000', function(){
console.log("i am listening at port 3000")
});











