const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const loginController = async (req, res) => {
    const password = req.body.password;
    const email = req.body.email;
    const isSuperUser = false;
    if(!email || !password){
        res.status(400);
        throw new Error("email or password fields are mandatory")
    }
    const user = await User.findOne({email});
    console.log(user)
    if(user && password === user.password){
        const accessToken = jwt.sign({
            user:{
                email: user.email,
                isSuperUser: user.isSuperUser
            }
        }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1m'})
        res.status(200).json({accessToken});
    } else{
        res.status(401);
        throw new Error("email and password are not valid")
    }
}

const registrationController = async (req, res) => {
    console.log(req.body)
    const password = req.body.password;
    const email = req.body.email;
    const isSuperUser = false;
    if(!email || !password){
        res.status(400);
        throw new Error("email or password field are not proper")
    }
    const userAvailable = await User.findOne();
    if(userAvailable) {
        res.status(400);
        throw new Error("user already exists")
    }
    await User.create({
        email,
        password,
        isSuperUser: isSuperUser ? isSuperUser : false
    })
    res.status(200).json({message: 'user registered succesfully'});
}

module.exports = {loginController, registrationController}