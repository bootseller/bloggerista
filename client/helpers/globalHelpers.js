Template.registerHelper("toHumanDate", function(timestamp){
  if(timestamp) {
    var length = timestamp.toString().length;
    if ( length === 10 ) {
          return moment.unix( timestamp ).format( 'MMMM Do, YYYY' );
        } else {
          return moment.unix( timestamp / 1000 ).format( 'MMMM Do, YYYY' );
        }
  }
});

Template.registerHelper("getUsernameFromId", function(userId){
  var user = Meteor.users.findOne({_id: userId});
  if (typeof user === "undefined") {
    return "Anonymous";
  }
  return user.username;
});
