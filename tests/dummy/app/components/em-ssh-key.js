import Ember from 'ember';
import layout from '../templates/components/em-ssh-key';

export default Ember.Component.extend({
  layout: layout,
  tagName: ['li'],
  classNames: ['list-group-item'],
  actions: {
    deleteKey: function(key) {
      var self = this;
      var duration = 300;

      this.$().animate({height: 0}, duration);
      Ember.run.later((function() {
        self.sendAction('action', key);
      }), duration);

    }
  },
  didInsertElement: function () {
  }
});
