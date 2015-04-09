import Ember from 'ember';
import layout from '../templates/components/purple-disclosed';

export default Ember.Component.extend({
  layout: layout,
  isShowing: false,
  hasErrors: false,
  toggleAction: 'toggleShowing',

  actions: {
    toggleShowing: function() {
      this.set('hasErrors', false);
      this.toggleProperty('isShowing');
    },
    submit: function() {
      var deferred = Ember.RSVP.defer();
      var self = this;

      this.set('hasErrors', false);

      // setup a deferred response that this component can take once
      // the action is resolved
      deferred.promise.then(function() {
        self.toggleProperty('isShowing');
      },
      function() {
        self.set('hasErrors', true);
      });

      this.sendAction('save', deferred);
    }
  }
});
