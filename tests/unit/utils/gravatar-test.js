import gravatar from '../../../utils/gravatar';
import { module, test } from 'qunit';

module('gravatar');

test('it returns a valid gravatar', function(assert) {
  var email = 'brian.runnells@gmail.com';
  var expected = 'http://www.gravatar.com/avatar/9b210755bd9296a95e75b08bc14fe4aa';

  var result = gravatar(email);
  assert.equal(result, expected);
});
