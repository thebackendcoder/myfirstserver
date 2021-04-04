const express = require('express');
const app = express();

app.get('/asglb', function(req, res){
    res.send("testing auto scaling and load balancer")
})

const port = process.env.port || 3000;
app.listen(port, function(){
console.log("i am listening at port 3000")
});











