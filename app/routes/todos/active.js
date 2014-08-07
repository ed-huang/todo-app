import Ember from 'ember';

console.log("Todos/Active Route Loaded");
export default Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return !todo.get('isCompleted');
		});
	},

	renderTemplate: function(controller) {
		this.render('todos/index', {controller: controller});
	}
});
