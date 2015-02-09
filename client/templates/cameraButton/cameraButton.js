var getPicture = function(opts) {
  MeteoricCamera.getPicture(opts, function(err, data) {
    if (err) {
      console.log('error', err);
    }
    if (data) {
      console.log(Meteor.userId(), "Saved an image")
      Pictures.insert({
        image: data,
        createdAt: new Date(),
        userId: Meteor.userId(),
      });
    }
  });
};

Template.cameraButton.events({
  'click button': function() {
    getPicture({
      quality: 95,
      width: 800,
      height: 800
    });
  }
});
