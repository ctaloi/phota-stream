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

Template.gallery.events({
  "click img": function(){    
    window.FullScreenImage.showImageBase64(this.image, this.createdAt);
  }
});

Template.gallery.rendered = function(){
  // $(".dropdown-button").dropdown();
  console.log(this);
};

Template.pictures.rendered = function(){
  $('.materialboxed').materialbox();
};
