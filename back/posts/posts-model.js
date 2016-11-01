
const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    title: {type: String, required: true},
    author: String,
})

// First argument is name of model. second argument is schema
const Post = mongoose.model('Post', blogSchema);


