const User = require('../models/User')
const jwt = require('jsonwebtoken')
//Error Handler
const handleError = (err)=>{
    errors = {email: '',password: ''}
 
    //invalid login user
    if(err.message === 'wrong email'){
        errors.email = "User Not Found!"
    }

    if(err.message === 'wrong password')
    {
        errors.password = "Entered wrong password!"
    }

    if(err.code===11000){
        errors. email = "email is already registered!"
        return errors;
    }
    if(err.message.includes('user validation failed')){
    Object.values(err.errors).forEach(({properties})=>{
        errors[properties.path] = properties.message;
     })
    }
     return errors;
     
}
const maxAge = 3*24*60*60;

const createToken = (id) => {
    return jwt.sign({id},'secret',{
        expiresIn : maxAge
    })
}

module.exports.signup_get = (req,res)=> {
    res.render('signup')
}

module.exports.login_get = (req, res)=> {
    res.render('login')
}
module.exports.signup_post = async (req, res)=> {
    const {email,password} = req.body;

    try {
        const user = await User.create({email,password})
        const token = createToken(user._id)
        res.cookie('jwt',token,{httponly:true,maxAge : maxAge*1000 })
        console.log(user._id)
        res.status(201).json({user : user._id});
    }catch(err){ 
       const errors = handleError(err)
        res.status(400).json({errors})
    }
    
}
module.exports.login_post =async  (req, res)=> {
    const {email,password} = req.body;
    try{
       const user = await User.login(email,password)
       const token = createToken(user._id)
        res.cookie('jwt',token,{httponly:true,maxAge : maxAge*1000 })
       res.status(200).json({user : user._id})
    }
    catch(err){
        const errors = handleError(err)
        res.status(404).json({errors})
    }

}
module.exports.logout = (req, res)=> {
    res.cookie('jwt','',{maxAge:1})
    res.redirect('/')
}