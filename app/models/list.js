import DS from 'ember-data';

export default DS.Model.extend({

    listName: DS.attr("string"),
    user: DS.belongsTo("list", { async: true, inverse: null }),
    listItem: DS.hasMany("listItem", { async: true,inverse: null }),
    recipe: DS.hasMany("recipe", { async: true,inverse: null }),


});
