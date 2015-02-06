Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.layout('layout');
  this.render('main');
});
