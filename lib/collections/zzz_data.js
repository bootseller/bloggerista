if(Meteor.isServer){
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
				author: 'bodyk',
				excerpt: randomExcerpt,
				text: randomText,
				likes: randomLikes
			});
		});
	}

	if(Meteor.roles.find().fetch() < 3) {
	  Roles.createRole('superadmin');
	  Roles.createRole('editor');
	  Roles.createRole('user');

	};


  if(Meteor.users.find().count() < 1) {
    var adminId = Accounts.createUser ({
      username: "bodyk",
      email: "btarlupa@gmail.com",
      password: "123123",
			profile: {
				firstName: 'bobo',
				lastName: 'zaza'
			}
    });
    Roles.addUsersToRoles(adminId, "superadmin");
  }
};
