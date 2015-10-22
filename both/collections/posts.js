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

if(Posts.find().count() < 25){
	_.each(_.range(25), function(){
		var randomTitle = faker.lorem.sentence();
		var randomName = faker.name.findName();
		var randomDate = faker.date.recent();
		var randomExcerpt = faker.lorem.paragraph();
		var randomText = faker.lorem.paragraphs();
		var randomLikes = faker.random.number();

		Posts.insert({
			title: randomTitle,
			date: randomDate,
			author: randomName,
			excerpt: randomExcerpt,
			text: randomText,
			likes: randomLikes
		});
	});
}
