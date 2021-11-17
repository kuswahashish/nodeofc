const path= require('path');
const express = require('express')

const app = express()

const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))

app.get('/weather',(req,res)=>{
    res.send({ 
        weather : 'its cloudy',
        location : 'ahmedabad'
    })
})
app.listen(3000,()=>{
    console.log("Server is Ready at port number 3000")
}) 