Template.gallery.helpers({
  showPictures: function() {
    return Pictures.find({}, {
      sort: {
        createdAt: -1
      }
    });
  },
  showRecent: function(count) {
    return Pictures.find({}, {
      sort: {
        createdAt: -1
      },
      limit: count
    });
  },
});
