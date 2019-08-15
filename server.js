const express = require('express')
const app = express ();
const Port = 3000

app.get("/", (req,res)=> {
    res.send('hello world')
})

app.listen(Port, () => console.log('Listening on port:', Port));