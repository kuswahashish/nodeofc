const mongoose = require('mongoose');
const user = require('../models/User');
const TodoSchema = new mongoose.Schema({
    todo : {
        type : String,
        require : true,
    },
    status : {
        type : Boolean,
        default : false,
    },
    uid : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('Todo', TodoSchema);