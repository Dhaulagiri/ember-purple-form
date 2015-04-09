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
    save: function(key) {
      var key = this.get('key');
      var name = this.get('name');

      this.store.createRecord('ssh-key', {
        name: name,
        key: key
      });
      return false;
    }
  }
});
