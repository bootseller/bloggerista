Template.adminusers.helpers({
  userlist: function () {
    return Meteor.users.find();
  }
})
