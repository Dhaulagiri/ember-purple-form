import Ember from 'ember';
import layout from '../templates/components/purple-inline';

export default Ember.Component.extend({
  layout: layout,
  isEditing: false,
  toggleAction: 'toggleEditing',

  actions: {
    toggleEditing: function() {
      this.toggleProperty('isEditing');
    },
    save: function() {
      this.toggleProperty('isEditing');
      this.sendAction('save');
    },
    cancel: function() {
      this.toggleProperty('isEditing');
      this.sendAction('cancel');
    }
  }
});
