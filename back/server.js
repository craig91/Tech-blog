const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postModel = require('./posts/posts-model')
const Post = mongoose.model('Post');
const commentModel = require('./comments/comment-model')
const Comment = mongoose.model('Comment');



mongoose.connect('mongodb://localhost/blog-app-test');


const db = mongoose.connection;

db.on('open', () => {
    console.log('db connection opened!');
    app.listen(5555, () => {
    console.log('Listen on port 5555');
    
    Post.find({}, (err, data) => {
    console.log('Database data found!', data);
    })
});

app.get('/', (req, res) => {
    res.send('hey from the craig page')
});

app.get('/posts', (req, res) => {
    res.send('hey from the post page')
 });
})

Post.create({
  title: 'test post 1', 
  author: 'craig 1',
  title: 'asa'
}, 
 (err, data) => {
  if(err) console.log('Error with database');
  else console.log('post created!');
})

Comment.create({
    title: 'Comment here',
    author: 'User Name',
    body: 'Enter Text Here',
    comments: [{body: 'craig 1 luis 2 ', date: Date}],

},
(err, data) => {
  if(err) console.log('Error in Comment');
  else console.log('Comment created!');
})







db.on('error', () => {
    console.log('error in db connection!');
})





