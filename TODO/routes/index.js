const router = require('express').Router()
const Todo = require('../models/Todo')

router.get('/',async(req, res) => {
    const todos = await Todo.find();
    
    res.render('index',{
        todos : todos
    })
})

module.exports = router