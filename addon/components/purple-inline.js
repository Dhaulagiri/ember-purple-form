import Ember from 'ember';
import layout from '../templates/components/purple-inline';

export default Ember.Component.extend({
  layout: layout,
  isEditing: false,
  toggleAction: 'toggleEditing',

  actions: {
    toggleEditing: function() {
      this.toggleProperty('isEditing');
      if (this.get('isEditing')) {
        // use 'newValueProp' as a backing field for the actual field we
        // are working with.  this let's us update that value without
        // immediately updating the actual field on the model
        var valueProp = this.get('valueProp');
        if (valueProp !== undefined) {
          var model = this.get('targetObject').get('model');
          var val = model.get(valueProp);
          model.set(this.get('newValueProp'), val);
        }
      }
    },
    save: function() {
      this.toggleProperty('isEditing');

      var newValueProp = this.get('newValueProp');
      if (newValueProp !== undefined) {
        var model = this.get('targetObject').get('model');
        var val = model.get(newValueProp);
        model.set(this.get('valueProp'), val);
      }
      this.sendAction('save');
    },
    cancel: function() {
      this.toggleProperty('isEditing');
      this.sendAction('cancel');
    }
  }
});
