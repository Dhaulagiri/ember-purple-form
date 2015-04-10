import Ember from 'ember';
import layout from '../templates/components/em-gravatar';
import gravatar from '../utils/gravatar';

export default Ember.Component.extend({
  layout: layout,
  email: null,

  profileImage: Ember.computed('email', function() {
    var url = gravatar(this.get('email'));
    return url;
  })
});
