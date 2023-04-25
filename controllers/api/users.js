
//* Request handler Logic
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//* Helper Functions -- to use both when the user sign up and when they log in
function createJWT(user) {
    return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'});
}

const create = async(req, res) => {
    // console.log('[From POST handler]', req.body)
    try {
      //* creating a new user and add it to the database
      const user = await User.create(req.body);
      const token = createJWT(user); //creating a new jwt
      //res.json to send back a string
      res.json(token);
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user){
            return res.status(400).json({message: "Invalid email or password"})
        }
        const match = await bcrypt.compare(req.body.password, user.password)
        if(!match){
            return res
              .status(400) .json({ message: "Invalid email or password" });
        }
        
        const token = createJWT(user)
    
    } catch (error) {
        res.status(400).json(error);
    }
}



module.exports = { create, login }