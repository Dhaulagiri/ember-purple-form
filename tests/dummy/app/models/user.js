import Ember from 'ember';
import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string')
});

User.reopenClass({
  FIXTURES: [
    {
      "id": "1",
      "name": "Brian Runnells",
      "email": "brian.runnells@gmail.com"
    },
    {
      "id": "2",
      "name": "Brian Runnells Github",
      "email": "brian.runnells+github@gmail.com"
    }
  ]
});

export default User;
