import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: '/__/proxy/api'
});
