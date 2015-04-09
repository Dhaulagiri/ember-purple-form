import Ember from 'ember';

export default Ember.Controller.extend({
  isShowing: false,

  actions: {
    toggleShowing: function() {
      this.toggleProperty('isShowing');
    }
  }
});
