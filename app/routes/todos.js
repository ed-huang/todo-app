import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
	model: function() {
		console.log('Todo Route');
		return this.store.find('todo');
	}
});
