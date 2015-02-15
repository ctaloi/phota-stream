Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', function() {
  this.layout('layout');
  this.render('main');
});

Router.route('/images/:_id', function() {
  var params = this.params;
  var id = params._id;
  console.log("showing image: ", id);
  this.render('images', {
    data: function() {
      return Pictures.findOne({
        _id: params._id
      });
    }
  });
}, {
  name: 'image.show'
});
