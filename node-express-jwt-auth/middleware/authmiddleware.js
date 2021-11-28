const jwt = require('jsonwebtoken')
const User = require('../models/User')
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    if(token)
    {
        jwt.verify(token,'secret',(error,decodedToken)=>{
            if(error){
                console.log(error)
                res.redirect('/login')
            }
            else{
                console.log(decodedToken)
                next()
            }
        })
    }
    else
    {
        res.redirect('/login')
    }
}

//check current User 

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

module.exports = {requireAuth,checkUser}