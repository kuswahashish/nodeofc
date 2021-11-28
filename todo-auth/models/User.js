const mongoose = require('mongoose');
const bcrypt =  require('bcrypt');
const {isEmail} = require('validator')
const userschema = new mongoose.Schema({
    email : {
        type: 'string',
        required: [true, "Please enter Email"],
        unique: true,
        lowercase: true,
        validate: [isEmail,"Please enter Valid Email"]
    },
    password : {
        type: 'string',
        required:  [true, "Please enter Password"],
        minlength : [6,"Password Length should be at least 6 characters"],
    }
})

userschema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password,salt)
    next();
})

userschema.statics.login = async function(email, password)
{
    const user = await this.findOne({email})
    if(user)
    {
        const auth = await bcrypt.compare(password,user.password)
        if(auth)
        {
            return user;
        }
        throw Error('wrong password')
    }
    throw Error('wrong email')
}

const User =  mongoose.model('User',userschema)
module.exports = User;