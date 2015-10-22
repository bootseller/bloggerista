Template.newpost.events({
	"submit .new-post": function(e, tpl) {
		e.preventDefault();
		var title = e.target.title.value;
		var text = $('.note-editable').html();
		console.log('clicked');

		var postId = Posts.insert({
			title: title,
			date: new Date(),
			author: 'New author',
			excerpt: 'Lorem Ipsum Dolores New post Item this is I beliewe omg',
			text: text,
			likes: '10'
		});

		Router.go('post', {_id: postId});
	}
});
Template.newpost.rendered = function() {
     $('#summernote').summernote({
         height: 200,   // set editable area's height
         focus: true    // set focus editable area after Initialize summernote
     });
}
