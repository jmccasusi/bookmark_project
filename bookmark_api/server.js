const express = require('express');
const mongoose = require('mongoose');
const app = express ();
const Port = 3003;

const bookmarkController = require('./controllers/bookmark')
// Middleware
app.use(express.json());
app.use('/bookmark', bookmarkController)



// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb://localhost:27017/bookmark', { useNewUrlParser: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

app.listen(Port, () => console.log('Listening on port:', Port));