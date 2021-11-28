const User = require('../models/User')
const Todo = require('../models/Todo')
const jwt = require('jsonwebtoken')
const cookieparser = require('cookie-parser')


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
const checkUser =  (req,res, next) =>{
    const token = req.cookies.jwt
    if(token)
    {
        jwt.verify(token,'secret',async(error,decodedToken)=>{
            if(error){
                res.locals.user = null
                next()
            }
            else{
                let user = await User.findById(decodedToken.id)
                res.locals.user = user
                next()
            }
        })

        const payload = jwt.verify(token,'secret')
    }
    else
    {
        res.locals.user = null
        next()
    }
}

module.exports.signup = async(req, res)=> {
    try{
    const {email, password} = req.body;
    console.log("user data : ",req.body)
    const user = await User.create({email,password})
    const token = createToken(user._id)
    res.cookie('jwt',token,{httponly:true,maxAge : maxAge*1000 })
    console/log("signup succesfull")
    console.log(user._id)
    res.send({id:user._id,email: user.email, password: user.password,message: "Signup Successful"})
    }catch(err){ 
        const errors = handleError(err)
        res.status(400).json({errors})
    }
}

module.exports.login = async(req, res)=> {
    const {email, password} = req.body;
    try{
        const user = await User.login(email,password)
        const token = createToken(user._id)
        res.cookie('jwt',token,{httponly:true,maxAge : maxAge*1000 })
        res.cookie('uid',user._id)
        res.status(200).json({uid : user._id})
     

     }
     catch(err){
         const errors = handleError(err)
         res.status(404).json({errors})
     }
}

module.exports.addtodo = async(req, res)=> {
    try{
        console.log("in add todo")
    const {todo, status} = req.body;
    const uid = req.cookies.uid
    console.log(uid)
    const newtodo = new Todo({todo,status,uid});
    if(newtodo.save())
    {   
        console.log("todo created successfully!")
        res.send("Todo Created successfully")
    }
    }catch(err){ 
        const errors = handleError(err)
        res.status(400).json({errors})
    }
}

module.exports.homepage = async(req, res)=> {
    try{
    console.log("Home Page")
    const uid = req.cookies.uid
    if(uid === undefined) {
        console.log("Login to see todo list")
        redirect('/login')
    }
    console.log(uid)
    const todos = await Todo.find({uid : uid});
    res.send(todos)
    }catch(err){ 
        const errors = handleError(err)
        res.status(400).json({errors})
    }
}

module.exports.logout = (req, res)=> {
    res.cookie('jwt','',{maxAge:1})
    res.cookie('uid','',{maxAge:1})
    res.redirect('/')
}