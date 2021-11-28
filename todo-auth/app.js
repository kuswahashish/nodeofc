const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/approutes');
const cookieparser = require('cookie-parser');
const {checkUser} = require('./controller/appcontroller')
const app = express();

app.use(express.json());
app.use(cookieparser())
const url = "mongodb://127.0.0.1:27017/todo-auth"

mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})

app.get('/',(req, res) => {
    res.send("Welcome /login to login  /signup to signup /addtodo to add todo and /todo to see todo")
})

app.use(routes)
 
app.listen(3000,()=>{
    console.log("application is ready at 3000 port")
});