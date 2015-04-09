import Ember from 'ember';
import layout from '../templates/components/purple-disclosed';

export default Ember.Component.extend({
  layout: layout,
  isShowing: false,
  toggleText: null,
  submitText: null,
  cancelText: null,
  toggleAction: 'toggleShowing',

  actions: {
    toggleShowing: function() {
      this.toggleProperty('isShowing');
    }
  }
});
