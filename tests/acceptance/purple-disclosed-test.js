import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';
import QUnit from 'qunit';

var toggleSelector = '.toggle-form';

QUnit.assert.isAbsent = function(selector, message) {
  message = message || selector + ' is absent from DOM';
  return this.equal(find(selector).length, 0, message);
};

QUnit.assert.isVisible = function(selector, message) {
  message = message || selector + ' is not visible';
  return this.ok(findWithAssert(selector).is(':visible'), message);
};

var application;

module('Acceptance: Disclosed Form', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('opening and closing a Disclosed form', function(assert) {
  visit('/disclosed');

  andThen(function() {
    assert.equal(currentPath(), 'disclosed');
    assert.isVisible(toggleSelector);
    assert.isAbsent('form');

    click(toggleSelector).then(function() {
      assert.isAbsent(toggleSelector);
      assert.isVisible('form');

      click('button[type="cancel"]').then(function() {
        assert.isVisible(toggleSelector);
        assert.isAbsent('form');
      });
    });
  });

});
