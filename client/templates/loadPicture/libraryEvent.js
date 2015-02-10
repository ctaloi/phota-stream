Template.libraryEvent.events({
  'click button': function() {
    if (Meteor.isCordova) {
      MeteoricCamera.getPicture({
        width: 350,
        height: 350,
        quality: 75,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      });
    } else {
      alert('Cordova only feature.');
    }
  }
});
