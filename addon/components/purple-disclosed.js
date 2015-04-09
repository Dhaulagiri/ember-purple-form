import Ember from 'ember';
import layout from '../templates/components/purple-disclosed';

export default Ember.Component.extend({
  layout: layout,
  isShowing: false,
  toggleAction: 'toggleShowing',

  actions: {
    toggleShowing: function() {
      this.toggleProperty('isShowing');
      // if (this.get('isShowing')) {
      //   this.sendAction('showingForm');
      // }
    },
    submit: function() {
      // here we would need to attempt to save the model associated with the form
      // if there are validation issues, keep the form visible and show error
      debugger
      var form = this.get('targetObject').get('form');
      this.get('targetObject').send('save').then(function(e) {
        debugger
      });
      // otherwise, hide the form
      this.toggleProperty('isShowing');
    }
  }
});
