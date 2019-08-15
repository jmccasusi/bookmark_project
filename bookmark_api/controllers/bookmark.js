const express = require('express')
const bookmark = express.Router()
const Bookmark = require('../model/bookmark')


// index
bookmark.get('/', (req,res)=>{
    res.send("hello")
})

module.exports = bookmark