import Ember from 'ember';

export default Ember.Controller.extend({
	songCreationStarted: false,
	
	title: '',
	
	canCreateSong: Ember.computed('songCreation',
	'model.songs.length',
	 function(){
		return this.get('songCreationStarted') ||
		this.get('model.songs.length'); 
	 }),
	
	isAddButtonDisabled: Ember.computed('title', function(){
		return Ember.isEmpty(this.get('title'));
	}),
	
	actions: {
		enableSongCreation: function(){
			this.set('canCreateSong', true);
		},
		
		
		updateRating: function(params){
			var song = params.item,
				rating = params.rating;
			
			if(song.get('rating') === rating){
				rating = 0;
			}
			
			song.set('rating', rating);
			song.save();
		}
	}
});
