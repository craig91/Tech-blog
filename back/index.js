
// Models
const Posts = require('./posts/posts-model');

//  Routes
const home = require('./home/home-router');
const posts = require('./posts/posts-model');

module.exports = {
	models: {
		Posts: Posts
	},

	routes: {
		posts: posts,
		home: home
	}
}