import Ember from 'ember';
import { module, test } from 'qunit';
import startapp from '../helpers/start-app';

var App;

module('Integration - Landing Page', {
  beforeEach: function() {
    App = startapp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('should welcome me to first ember', function(assert) {
  visit('/').then(function() {
    assert.equal(find('h2#title').text(), 'Welcome to First Ember');
  });
});
