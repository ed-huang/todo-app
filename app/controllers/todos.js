import Ember from 'ember';
export default Ember.ArrayController.extend({
	actions: {
		editTodo: function() {
			console.log("todos controller");
		},

		createTodo: function() {

			var title = this.get('newTitle');

			if(!title) { return false; }
			if(!title.trim()) { return; }

			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});

			this.set('newTitle', '');

			todo.save();
		},

		clearCompleted: function() {
			console.log('clearCompleted');
			var completed = this.filterBy('isCompleted', true);
			completed.invoke('deleteRecord');
			completed.invoke('save');
		}
	},

	allAreDone: function(key, value) {
		console.log("all are done");
		if (value === undefined) {
			return !!this.get('length') && this.isEvery('isCompleted');	
		} else {
			this.setEach('isCompleted', value);
			this.invoke('save');
			return value;
		}
	}.property('@each.isCompleted'),

	hasCompleted: function() {
		return this.get('completed') > 0;
	}.property('completed'),

	completed: function() {
		return this.filterBy('isCompleted', true).get('length');
	}.property('@each.isCompleted'),

	remaining: function() {
		return this.filterBy('isCompleted', false).get('length');
	}.property('@each.isCompleted'),

	inflection: function() {
		var remaining = this.get('remaining');
		return (remaining === 1) ? 'todo' : 'todos';
	}.property('remaining')
});