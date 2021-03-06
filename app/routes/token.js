import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('token', params.token_id);
  },

  actions: {
    save: function() {
      this.currentModel.save();
    }
  }
});
