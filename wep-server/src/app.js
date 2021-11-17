const path= require('path');
const hbs = require('hbs')
const express = require('express');

const app = express()
//Defined Path
const publicPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
//Setup path for views and tamplates
app.set('view engine','hbs')
app.set('views',templatePath)
hbs.registerPartials(partialsPath)

//static directory 
app.use(express.static(publicPath))

app.get('',(req, res) => {
    // console.log(req.params) 
    res.render('index',{
        htitle: 'Dynamic pages',
        title: 'Weather App',
        name:'ashish'
    })
})
app.get('/about',(req, res) => {
    res.render('about',{
        htitle: 'Dynamic pages',
        title: 'About page',
        name:'john'
    })
})
app.get('/help',(req, res) => {
    res.render('index',{
        htitle: 'Dynamic pages',
        title: 'Help Page',
        name:'wick'
    })
})
app.get('/weather',(req,res)=>{
    res.send({ 
        weather : 'its cloudy',
        location : 'ahmedabad'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('articalerror',{
        htitle: 'Dynamic pages',
      
    })
})
app.get('*',(req,res)=>{
    res.render('404error',{
        htitle: 'Dynamic pages',
      
    })
})
app.listen(3000,()=>{
    console.log("Server is Ready at port number 3000")
}) 