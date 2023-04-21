
//* Request handler Logic
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

async function create(req, res) {
    // console.log('[From POST handler]', req.body)
    try {
        //* creating a new user
        const user = await User.create(req.body);
        console.log(user);

        //* creating a new jwt
        jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'});
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}



module.exports = {
    create,
}