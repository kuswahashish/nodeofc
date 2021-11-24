const express = require('express');
const app = express();

app.get('',(req, res) => {
    res.end("Server is Ready.")
})

app.listen(3003,()=> {
    console.log('listening on 3003 port')
})