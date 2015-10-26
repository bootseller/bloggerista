if(Meteor.isClient){
  /* setting up accounts UI*/
  accountsUIBootstrap3.setLanguage('ua');
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL',
    extraSignupFields: [{
      fieldName: 'firstName',
      fieldLabel: 'First name',
      inputType: 'text',
      visible: true,
      validate: function(value, errorFunction) {
        if (!value) {
          errorFunction("Please provide your first name");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      fieldName: 'lastName',
      fieldLabel: 'Last name',
      inputType: 'text',
      visible: true
    }],
  });
}
