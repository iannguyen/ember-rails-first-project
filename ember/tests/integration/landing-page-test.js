import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - Landing Page', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should welcome me to First Ember', function(assert) {
  visit('/').then(function() {
    assert.equal(find('h2#title').text(), 'Welcome to First Ember');
  });
});

test('Should allow navigatin back to root fom another page', function(assert) {
  visit('/about').then(function() {
    click("a:contains('Home')").then(function() {
      assert.equal(find('h2#title').text(), 'Welcome to First Ember');
    });
  });
});
