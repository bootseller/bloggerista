/* Fronted*/

Meteor.publish("allPosts", function() {
  return Posts.find();
});

Meteor.publish("singlePost", function(postId) {
  return Posts.find({_id:postId});
});

/* Admin */
Meteor.publish("listUsers", function(){
  return Meteor.users.find();
});
