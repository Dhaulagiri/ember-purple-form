import Ember from 'ember';
import DS from 'ember-data';
import Gravatar from '../utils/gravatar';

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  profileImage: Ember.computed('email', function() {
    var url = Gravatar(this.get('email'));
    return url;
  })
});

User.reopenClass({
  FIXTURES: [
    {
      "id": "1",
      "name": "Brian Runnells",
      "email": "brian.runnells@gmail.com"
    }
  ]
});

export default User;
