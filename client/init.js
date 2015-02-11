// Meteor.startup(function () {
//   if (Meteor.isCordova) {
//     StatusBar.hide();}
// });

Meteor.startup(function () {
  Session.set('userId', Meteor.userId());
});

Meteor.startup(function () {
  Session.setDefault('img', null);
});
