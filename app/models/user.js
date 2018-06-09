import DS from 'ember-data';

export default DS.Model.extend({

    uid : DS.attr("string"),
    email: DS.attr("string"),
    name: DS.attr("string"),
    list: DS.hasMany("list", { async: true,inverse: null })
});
