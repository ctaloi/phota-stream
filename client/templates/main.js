Template.main.helpers({
  email: function () {
    return Meteor.user().emails[0].address;
  }
});


Template.main.helpers({
  name: function () {
    return Meteor.user().profile.name;
  }
});
