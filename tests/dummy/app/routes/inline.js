import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('user', 1);
  },
  actions: {
    save: function() {
      // TODO - should validate the email address
      var model = this.get('controller.content');
      return model.save();
    },
    // Don't persist changes to the model if the user clicks the cancel button
    cancel: function() {
      var model = this.get('controller.content');
      if (model.get('isDirty')) {
        model.rollback();
      }
    }
  }
});
