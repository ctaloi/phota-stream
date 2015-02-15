var getPicture = function(opts) {
  MeteorCamera.getPicture(opts, function(err, data) {
    if (err) {
      console.log('error', err);
    }
    if (data) {
      console.log(Meteor.userId(), "Saved an image");
      console.log(opts);
      Session.set("img", data);
      Pictures.insert({
        image: data,
        createdAt: new Date(),
        userId: Meteor.userId(),
      });
    }
  });
};

Template.cameraButton.events({
  'click a': function() {
    getPicture({
      quality: 90,
      width: 1024,
      height: 1024,
      saveToPhotoAlbum: true
    });
  }
});

Template.libraryButton.events({
  'click a': function () {
    if (Meteor.isCordova) {
      getPicture({
        quality: 90,
        width: 1024,
        height: 1024,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      });
    } else {
      alert('Cordova only feature.');
    }
  }
});
