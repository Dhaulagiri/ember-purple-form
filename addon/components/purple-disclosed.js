import Ember from 'ember';
import layout from '../templates/components/purple-disclosed';

export default Ember.Component.extend({
  layout: layout,
  isShowing: false,
  toggleAction: 'toggleShowing',

  actions: {
    toggleShowing: function() {
      this.toggleProperty('isShowing');
    },
    submit: function() {
      // here we would need to attempt to save the model associated with the form
      // if there are validation issues, keep the form visible and show error

      // otherwise, hide the form
      this.toggleProperty('isShowing');
    }
  }
});
