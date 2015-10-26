Router.configure({
	layoutTemplate: 'mainLayout'
});

var checkIfAdmin = function(){
	this.next();
	if (!Roles.userIsInRole(Meteor.user(), 'superadmin')){
		this.redirect('home');
	} else {
		this.next();
	}
};

Router.onBeforeAction(checkIfAdmin, {
	only: ['admin', 'adminpostslist']
});

Router.route('/', {
	name: 'home',
	template: 'postlist',
	waitOn: function () {
		return Meteor.subscribe('allPosts');
	}
});


Router.route('/addpost', {
  	name: 'newpost',
  	template: 'newpost'
});

Router.route('/admin', {
	name: "admin",
	layoutTemplate: 'adminLayout',
	template: 'adminusers',
	waitOn: function() {
		return Meteor.subscribe('listUsers');
	},
});

Router.route('/admin/posts', {
	name: "adminpostslist",
	layoutTemplate: 'adminLayout',
	template: 'adminposts',
	waitOn: function () {
		return Meteor.subscribe('allPosts');
	}
});

Router.route('/:_id', {
  	name: 'post',
		layoutTemplate: 'postLayout',
  	template: 'post',
		waitOn: function() {
			return Meteor.subscribe('singlePost', this.params._id);
		},
		data: function() {
			return Posts.findOne({});
		}
});


Router.route('/:username',{
	name: 'userprofile',
	template: 'userprofile',
	data: function () {
		return Meteor.users.findOne({username: this.params.username});
	}
});
