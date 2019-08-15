const express = require('express')
const bookmark = express.Router()
const Bookmark = require('../model/bookmark')

// Seed data
const BookmarkSeedData = require('../model/seedData.js')

// seed route - only use once
// bookmark.get('/seed', (req,res) => {
//     Bookmark.create(BookmarkSeedData, (err, createdBookmarks) => {
//         res.redirect('/bookmark');
//     })
// })

// index
bookmark.get('/', (req,res)=>{
    Bookmark.find({}, (err, foundBookmarks) => {
        if (err) {
            res.status(400).json({
                error: error.message
            });
        }
        res.status(200).json(foundBookmarks);
    })
})

// 

module.exports = bookmark