/* Fronted*/

Meteor.publish("allPosts", function() {
  return Posts.find();
});

Meteor.publish("singlePost", function(postId) {
  return [
    Posts.find({_id:postId}),
    Meteor.users.find({}, {fields: {
      "username": 1
    }})
  ];
});

Meteor.publish("postComments", function(postId) {
  return Comments.find({postId:postId});
});

/* Admin */
Meteor.publish("listUsers", function(){
  return Meteor.users.find();
});
