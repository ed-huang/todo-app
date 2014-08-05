import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
	model: function() {
		console.log('faq model');
		this.store.push('faq', {id: 1, question: 'Is this a question?', answer: 'Of Course it is.'});
		this.store.push('faq', {id: 2, question: 'What time is it?', answer: 'It is now.'});
		return this.store.all('faq');
	}
});