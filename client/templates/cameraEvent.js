Session.setDefault('img', null);

var getPicture = function(opts) {
  MeteorCamera.getPicture(opts, function(err, data) {
    if (err) {
      console.log('error', err);
    }
    if (data) {
      Session.set('img', data)
      Pictures.insert({
        image: data,
        createdAt: new Date(),
        });
      }
  });
};


Template.cameraEvent.events({
  'click button': function () {
    console.log(this)
    getPicture({width: 350, height: 350, quality: 75});
  }
});
