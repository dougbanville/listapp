import DS from 'ember-data';

export default DS.Model.extend({

    name: DS.attr("string"),
    dateCreated: DS.attr('date',{
        defaultValue(){
            return new Date();
        }
    }),
    list: DS.belongsTo("list"),
    active: DS.attr("boolean")

});
