// Template.profile.helpers({
//   userEmail: function () {
//     var user = Meteor.user();
//     console.log(user.emails[0]);
//     return user.emails[0].address;
//     }
//   });

var currentUserId = Meteor.userId();
return currentUserId;
