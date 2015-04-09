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
    submit: function() {
      this.toggleProperty('isEditing');
    }
  }
});
