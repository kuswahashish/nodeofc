const express = require('express');
const mongoose = require('mongoose');
const cookieparser = require('cookie-parser');
const {requireAuth,checkUser} = require('./middleware/authmiddleware');
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieparser())
// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://Ashish:ashish123@trd173-cluster.dqf3r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*',checkUser)
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth,(req, res) => res.render('smoothies'));
app.use(require("./routes/authRoutes"))
