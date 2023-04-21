
//* Request handler Logic
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

//* /*-- Helper Functions --*/
function createJWT(user) {
    return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'});
}

const create = async(req, res) => {
    // console.log('[From POST handler]', req.body)
    try {
        //* creating a new user and add it to the database
        const user = await User.create(req.body);
        // console.log(user);
        //* creating a new jwt 
        const token = createJWT(user)
        //res.json to send back a string
        res.json(token);
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}



module.exports = {
    create,
}