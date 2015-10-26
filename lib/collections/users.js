UserProfile = new SimpleSchema({
    firstName: {
        type: String
    },
    lastName: {
        type: String,
        optional: true
    },
    website: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    bio: {
        type: String,
        optional: true
    }
});

UsersSchema = new SimpleSchema({
  username: {
      type: String,
      optional: true
  },
  emails: {
      type: Array,
      optional: true
  },
  "emails.$": {
      type: Object
  },
  "emails.$.address": {
      type: String,
      regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
      type: Boolean
  },
  createdAt: {
      type: Date
  },
  profile: {
      type: UserProfile,
      optional: true
  },
  services: {
      type: Object,
      optional: true,
      blackbox: true,
      optional: true
  },
  roles: {
      type: [String],
      defaultValue: ['user']
  }
});
