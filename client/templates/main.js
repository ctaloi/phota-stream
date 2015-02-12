Template.main.helpers({
  email: function () {
    if (Meteor.user())
      return Meteor.user().emails[0].address;
  }
});


Template.main.helpers({
  name: function () {
    if (Meteor.user())
      return Meteor.user().profile.name;
  }
});
