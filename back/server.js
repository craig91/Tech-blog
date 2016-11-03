const express = require('express');
const app = express();
const mongoose = require('mongoose');


const postModel = require('./posts/posts-model')
const Post = mongoose.model('Post');
const commentModel = require('./comments/comment-model')
const Comment = mongoose.model('Comment');
const models = require('./index').models;
const routes = require('./index').routes;


// const path = require('path')
// const rootPath = path.join(__dirname, '../../')
// var bodyParser = require('body-parser');




mongoose.connect('mongodb://localhost/blog-app-test');


const db = mongoose.connection;





db.on('open', () => {
    app.use('*', routes.home);
    
    app.listen(5555, () => {
   
    
    Post.find({}, (err, data) => {
    
    })
});

app.get('/', (req, res) => {
    res.send('hey from the craig page')
    })
});

app.get('/posts', (req, res) => {
    Post.find({}, (err, data) => {
        res.send(data)
    })
 });




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
    comments: [{body: 'String'}],
    hidden: Boolean,
},
(err, data) => {
  console.log(data)
  if(err) console.log('Error in Comment');
  else console.log('Comment created!');
})







db.on('error', () => {
    console.log('error in db connection!');
})





