const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

//DB Config
const db = require('./config/keys').mongoURI;

mongoose.connect(db, {useNewUrlParser:true})
    .then(()=>{
        console.log('mongodb Connect')
    }).catch(err => console.log(err))

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//body parser
app.use(express.urlencoded({extended : false}));

//Routes
app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('listening on port : ',PORT)
});