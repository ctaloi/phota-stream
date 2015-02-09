Router.plugin('loading', {loadingTemplate: 'loading'});

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.layout('layout');
  this.render('main');
  }, {
  waitOn: function () {
    return Meteor.subscribe('Pictures');
  }
});

Router.route('img', function () {
  this.render('img');
});
