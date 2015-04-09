import Em from 'ember';
import DS from 'ember-data';
import EmberValidations from 'ember-validations';

var SshKey = DS.Model.extend(EmberValidations.Mixin, {
  name: DS.attr('string'),
  key: DS.attr('string'),

  validations: {
    name: {
      presence: true
    },
    key: {
      presence: true
    }
  }
});

SshKey.reopenClass({
  FIXTURES: [
    { "id": "1", "name": "Macbook Pro", "key": "abcd-1234" },
    { "id": "2", "name": "iMac", "key": "efgh-9876" }
  ]
});

export default SshKey;
