Template.nav.helpers({
  email: function () {
    if (Meteor.user())
      return Meteor.user().emails[0].address;
  },
  name: function () {
    if (Meteor.user())
      return Meteor.user().profile.name;
  }
});
