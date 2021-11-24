const router = require('express').Router()
const Todo = require('../models/Todo')
router.post('/add',(req, res) => {
    const { todo } =  req.body;
    if( todo.replace(/\s/g, "").length > 0){
    const newTodo = new Todo({todo});

    newTodo.save().then(()=> {
        console.log("Todo added successfully");
        res.redirect('/')
    }).catch((err) => { 
        console.log("Error while adding new todo",err)
    })
    }
    else
    { 
        res.redirect('/')
    }
})

router.get('/delete/:_id', (req, res) => {

    const {_id} = req.params;
    Todo.deleteOne({_id}).then(() => {
        console.log("Todo deleted successfully");
        res.redirect('/')
    }).catch((err) => {
        console.log("Error while deleting")
    })
})

router.get('/edit/:_id', (req, res) => {
    const {_id} = req.params;
    Todo.findById(_id,(err,{todo})=>{
    if(err)
    { 
        return res.send(err);
    }
    const todos =  Todo.find();
    res.render('edit-todo',{
        _id : _id,
        etodo : todo
    })
    })
       
})

router.post('/update', (req, res) => {
    
    const {_id} = req.body;
    console.log(_id)
    Todo.findById(_id,(err,stodo) => {
    if(err)
    { 
        return res.send(err);
    }
    stodo.todo = req.body.etodo
    stodo.save();
    res.redirect('/')
    })
       
})

module.exports = router