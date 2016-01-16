import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var speakers = this.store.findAll('speaker');
    return speakers;
  }
});
