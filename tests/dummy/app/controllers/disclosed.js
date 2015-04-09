import Ember from 'ember';

export default Ember.Controller.extend({
  form: function() {
    return this.store.createRecord('ssh-key');
  },

  actions: {
    deleteKey: function(key) {
      this.store.find('ssh-key', key.id).then(function(key) {
        key.destroyRecord();
      });
    },
    save: function(deferred) {
      var self = this;

      // Create a new record based on the values in the form
      var key = this.get('key');
      var name = this.get('name');
      var sshKey = this.store.createRecord('ssh-key', {
        name: name,
        key: key
      });

      // validate the record
      sshKey.validate();

      if (sshKey.get('isValid')) {
        sshKey.save().then(function() {
          // resolve the deferred promise
          deferred.resolve();
          // clear the form
          self.set('key', '');
          self.set('name', '');
        });
      } else {
        deferred.reject();
        sshKey.destroyRecord();
      }
    }
  }
});
