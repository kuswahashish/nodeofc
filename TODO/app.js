const express = require('express');
const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/todo"
const app = express();

mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})

app.use(express.urlencoded({ extended : true }));
app.use(express.static("public"))
app.set("view engine","ejs");

app.use(require("./routes/index"))
app.use(require("./routes/todo"))


app.listen(3003,() => {
    console.log('Server is started at port 3000')
})