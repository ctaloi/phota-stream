Session.setDefault('img', null);

var getPicture = function(opts) {
  MeteoricCamera.getPicture(opts, function(err, data) {
    if (err) {
      console.log('error', err);
    }
    if (data) {
      Session.set('img', data)
      console.log('img', data)
      Pictures.insert({
        image: data,
        createdAt: new Date(),
        });
      }
  });
};


Template.takePicture.events({
  'click button': function () {
    getPicture({quality: 75});
  }
});
