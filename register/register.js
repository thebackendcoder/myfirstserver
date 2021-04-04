
const dbclient= require('../modules/dynamoclient')

const register = async function (req, res, next) {
    await dbclient.register(req);
    next();
}

module.exports = {
    register
}