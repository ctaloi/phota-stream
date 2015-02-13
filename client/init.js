Meteor.startup(function() {
  Geolocation.currentLocation();
});

Meteor.startup(function () {
  Session.set('userId', Meteor.userId());
});

Meteor.startup(function () {
  Session.setDefault('img', null);
});
