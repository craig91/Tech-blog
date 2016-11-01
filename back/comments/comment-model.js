const mongoose = require('mongoose')
const commentSchema = mongoose.Schema({
    title: String,
    author: String,
    body: String,
    comments: [{body: String, date: Date}],
    data: { type: Date, default: Date.now },
    hidden: Boolean,
    meta:   {
        votes: Number,
        favs: Number
    }
    
});

const Comment = mongoose.model('Comment', commentSchema) 