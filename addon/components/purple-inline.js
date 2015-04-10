import Ember from 'ember';
import layout from '../templates/components/purple-inline';

export default Ember.Component.extend({
  layout: layout,
  isEditing: false,
  toggleAction: 'toggleEditing',

  // This acts as a temporary field used while editing that holds a copy
  // of the field we are working with
  fieldValue: Ember.computed('value', function() {
    return this.get('value');
  }),

  actions: {
    toggleEditing: function() {
      this.toggleProperty('isEditing');
    },
    save: function() {
      this.toggleProperty('isEditing');

      var model = this.get('targetObject').get('model');
      var val = this.get('fieldValue');

      // Validation to ensure we have a valid property on the model to
      // save our temporary value (fieldValue) back to
      if (this.fieldName === undefined || model.get(this.fieldName) === undefined) {
        Ember.assert('You must specify a valid fieldName string that corresponds to the property on your model');
      } else {
        model.set(this.fieldName, val);
      }

      this.sendAction('save');
    },
    cancel: function() {
      this.toggleProperty('isEditing');
      this.sendAction('cancel');
    }
  }
});
