import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TodoAppENV.locationType
});

Router.map(function() {
  this.route('faq');
});

export default Router;
