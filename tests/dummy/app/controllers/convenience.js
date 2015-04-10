import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(user) {
      this.store.find('user', user.id).then(function(user) {
        user.destroyRecord();
      });
    },
    submit: function() {
      var self = this;
      var email = this.get('email');

      // warning, extremely naive and ineffectual error handling
      if (email === undefined) {
        return;
      }
      
      var user = this.store.createRecord('user', {
        email: email
      });

      user.save().then(function() {
        self.set('email');
      });
    }
  }
});
