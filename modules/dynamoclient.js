var AWS = require('aws-sdk');
AWS.config.update({region:'ap-south-1'});

var ddb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'})

const register= async function(req){
  const{mail , password, mobile}= req.body;
var params = {
  TableName: 'mailid',
  Item: {
    'mail' : mail,
    "password": password,
    "mobile":mobile,
  }
};
await ddb.put(params).promise();
}
module.exports={
    register
}

