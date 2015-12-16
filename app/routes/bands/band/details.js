import Ember from 'ember';

// maybe not de delete not really specified...
//	model: function(){
//		return this.modelFor('bands.band');
//	}

export default Ember.Route.extend({
	actions: {
		save: function(){
			var controller = this.get('controller'),
				band = controller.get('model');
				
				return band.save('');
		},
		
		willTransition: function(transition){
			var controller = this.get('controller'),
				leave;
			
			if(controller.get('isEditing')){
				leave = window.confirm("You have unsaved changes. Are you sure you want yo leave?");
				if(leave){
					controller.set('isEditing',false);
				}else{
					transition.abort();
				}
			}		
		}
	}
});
