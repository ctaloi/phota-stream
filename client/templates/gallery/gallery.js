Template.gallery.helpers({
  getPictures: function() {
    return Pictures.find({}, {
      sort: {
        createdAt: -1
      },
      skip: 0
    });
  },
  getRecentPictures: function(count) {
    return Pictures.find({}, {
      sort: {
        createdAt: -1
      },
      limit: count
    });
  },
  getPictureCount: function() {
    return Pictures.find().count();
  },
  getLastPicture: function() {
    return Session.get("img");
  }
});

Template.pictures.rendered = function(){
  $('.materialboxed').materialbox();
};
