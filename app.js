const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("This is the fiest")
})

const port = process.env.port || 3000;
app.listen(port, function(){
console.log("i am listening at port 3000")
});











