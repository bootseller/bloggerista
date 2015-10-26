Accounts.onCreateUser(function(options, user) {
    // Add an user roles array
    user.roles = ["user"];
    if (options.profile)
        user.profile = options.profile;
    return user
});
