import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TodoAppENV.locationType
});

Router.map(function() {
	this.resource('todos', { path: '/' }, function () {
    // additional child routes
    	this.route('active');
    	this.route('completed');    
  	});
	this.route('faq');
});

export default Router;
