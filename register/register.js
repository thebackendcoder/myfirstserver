
const dbclient = require('../modules/dynamoclient')
const fast2sms = require('fast-two-sms');

const register = async function (req, res, next) {
    const mobile = req.body.mobile
    try {
        const mobres = await fast2sms.sendMessage({ authorization: process.env.auth, message: "you have registerd", numbers: [mobile] })
        console.log(mobres)
        if (mobres.return) {
            await dbclient.register(req);
        }
        else {
            res.send("please enter valid number");
        }
    }
    catch (err) {
        console.log(err)
    }
    next();
}

module.exports = {
    register
}