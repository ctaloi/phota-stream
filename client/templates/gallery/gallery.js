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
      sort: { createdAt: -1 },
      limit: count
    });
  },
});

// Template.image.rendered = function() {
//   console.log("RENDERED TEMPLATE");
//   $('#gallery').justifiedGallery({
//     // option: default,
//     rowHeight: 120,
//     maxRowHeight: 0,
//     lastRow: 'nojustify',
//     fixedHeight: false,
//     captions: false,
//     margins: 1,
//     randomize: false,
//     extension: /.[^.]+$/,
//     refreshTime: 250,
//     waitThumbnailsLoad: true,
//     justifyThreshold: 0.35,
//     cssAnimation: false,
//     imagesAnimationDuration: 100
//   }).on('jg.complete', function(e) {
//     // this callback runs after the gallery layout is created
//   }).on('jg.resize', function(e) {
//     // this callback runs after the gallery is resized
//   }).on('jq.rowflush', function(e) {
//     // this callback runs when a new row is ready
//   });
// };
