Router.plugin('loading', {loadingTemplate: 'loading'});

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.layout('layout');
  this.render('main');
});
