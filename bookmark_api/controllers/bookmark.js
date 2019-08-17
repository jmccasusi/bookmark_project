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
                error: err.message
            });
        }
        res.status(200).json(foundBookmarks);
    })
})

// create route

bookmark.post('/',(req,res)=>{
    Bookmark.create(req.body, (err, createdBookmark) => {
        if (err) {
            res.status(400).json({
                error: err.message
            });
        }
        res.status(200).json(createdBookmark);
    })
})

// delete route

bookmark.delete('/:id',(req,res)=>{
    Bookmark.findByIdAndDelete(req.params.id, (err, deletedBookmark) => {
        if (err) {
            res.status(400).json({
                error: err.message
            });
        }
        res.status(200).json(deletedBookmark);
    })
})

// edit route put
bookmark.put('/:id',(req,res)=>{
    Bookmark.findByIdAndUpdate(req.params.id, req.body, (err, updatedBookmark) => {
        if (err) {
            res.status(400).json({
                error: err.message
            });
        }
        res.status(200).json(updatedBookmark);
    })
})



module.exports = bookmark