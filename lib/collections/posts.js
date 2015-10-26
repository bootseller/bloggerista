Posts = new Mongo.Collection('posts');

PostsSchema = new SimpleSchema({
	title: {
		type: String,
		label: "Post Title",
	},
	date: {
		type: Date,
		label: "Publish Date"
	},
	author: {
		type: String,
		label: "Autor"
	},
	excerpt: {
		type: String,
		label: "Post Excerpt"
	},
	text: {
		type: String,
		label: "Post Text"
	},
	likes: {
		type: Number,
		label: "Number of likes"
	}
});

Posts.attachSchema(PostsSchema);
