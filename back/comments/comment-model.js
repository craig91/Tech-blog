// const mongoose = require('mongoose')
// const commentSchema = mongoose.Schema({
//     title: String,
//     author: String,
//     body: String,
//     comments: [{body: String, date: Date}],
//     data: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta:   {
//         votes: Number,
//         favs: Number
//     }
    
// });

// const Comment = mongoose.model('Comment', commentSchema) 


const mongoose = require('mongoose');
const commentSchema = mongoose.Schema({
    title: {type: String, required: true},
    author: String,
})

// First argument is name of model. second argument is schema
const Post = mongoose.model('Comment', commentSchema);