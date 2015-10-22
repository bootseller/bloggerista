Router.configure({
	layoutTemplate: 'mainLayout'
});

Router.route('/', {
	name: 'home',
	template: 'postlist'
});


Router.route('/addpost', {
  	name: 'newpost',
  	template: 'newpost'
});

Router.route('/:_id', {
  	name: 'post',
  	template: 'post',
	data: function () {
		return Posts.findOne({_id: this.params._id});
	}
}); 
