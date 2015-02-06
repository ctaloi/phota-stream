Template.thePictures.helpers({
  showPictures: function () {
    return Pictures.find({}, {sort: { createdAt: -1 }})
  }
});
