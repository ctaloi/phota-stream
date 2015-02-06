Meteor.publish("Pictures", function () {
  return Pictures.find({})
});
