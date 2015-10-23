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

Router.route('/admin', {
	name: "admin",
	layoutTemplate: 'adminLayout',
	template: 'adminusers'
});

Router.route('/admin/posts', {
	name: "adminpostslist",
	layoutTemplate: 'adminLayout',
	template: 'adminposts'
});

Router.route('/:_id', {
  	name: 'post',
		layoutTemplate: 'postLayout',
  	template: 'post',
		data: function () {
			return Posts.findOne({_id: this.params._id});
		}
});


Router.route('/:username',{
	name: 'userprofile',
	template: 'userprofile',
	data: function () {
		return Meteor.users.findOne({username: this.params.username});
	}
});
