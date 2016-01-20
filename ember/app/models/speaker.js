import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  presentation_ids: DS.hasMany('presentation')
});
