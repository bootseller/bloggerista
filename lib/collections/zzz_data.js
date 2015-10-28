if(Meteor.isServer){

  if(Meteor.users.find().count() < 1) {

		let _usersArray = [];

		Roles.createRole('superadmin');
		Roles.createRole('editor');
		Roles.createRole('user');

    let _newAdminId = Accounts.createUser ({
      username: "bodyk",
      email: "btarlupa@gmail.com",
      password: "123123",
			profile: {
				firstName: 'bobo',
				lastName: 'zaza'
			}
    });
    Roles.addUsersToRoles(_newAdminId, "superadmin");
		_usersArray.push(_newAdminId);

		let _newUserId = Accounts.createUser ({
			username: "user",
			email: "user@gmail.com",
			password: "123123",
			profile: {
				firstName: 'username',
				lastName: 'userlastname'
			}
		});
		Roles.addUsersToRoles(_newUserId, "user");
		_usersArray.push(_newUserId);
		let _newEditorId = Accounts.createUser ({
			username: "editor",
			email: "editor@gmail.com",
			password: "123123",
			profile: {
				firstName: 'editorusername',
				lastName: 'editorlastname'
			}
		});
		Roles.addUsersToRoles(_newEditorId, "editor");
		_usersArray.push(_newEditorId);

	if(Posts.find().count() < 25){
		_.each(_.range(25), function(){
			var randomTitle = faker.lorem.sentence();
			var randomName = faker.name.findName();
			var randomDate = faker.date.recent();
			var randomExcerpt = faker.lorem.paragraph();
			var randomText = faker.lorem.paragraphs();
			var randomLikes = faker.random.number();

			var _newPostId = Posts.insert({
				title: randomTitle,
				date: randomDate,
				author: 'bodyk',
				excerpt: randomExcerpt,
				text: randomText,
				likes: randomLikes
			});
			_.each(_.range(15), function(){
				var randomCommentDate = faker.date.recent();
				var randomCommentText = faker.lorem.paragraph();
				var _randomUser = _usersArray[_.random(_usersArray.length-1)];

					Comments.insert({
						authorId: _randomUser,
						postId: _newPostId,
						text: randomCommentText,
						date: randomCommentDate
					});
			});

		});
  }
	};
};
