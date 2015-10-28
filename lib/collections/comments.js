Comments = new Mongo.Collection("comments");

CommentsSchema = new SimpleSchema({
  authorId: {
    type: String,
    label: "Author Id"
  },
  postId: {
    type: String,
    label: "Post Id"
  },
  text: {
    type: String,
    label: "Comment Text"
  },
  date: {
    type: Date,
    label: "Comment Date"
  }
});

Comments.attachSchema(CommentsSchema);
