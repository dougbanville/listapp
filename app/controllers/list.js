import Controller from '@ember/controller';

export default Controller.extend({

    recipe: false,

    shareUrl: Ember.computed('model', function(){
		let id = this.get('model').id;
		return `http://localhost:4200/${id}`;
	}),


    actions: {
        addListItem() {
            let name = this.get("name");
            var newListItem = this.store.createRecord("listItem", {
                name: name,
                list: this.get("model")
            });

            let list = this.get("model");
            list.get("listItem").addObject(newListItem);
            newListItem.save().then(() => {
                this.set("name", null)
                return list.save();
            })

        },
        deleteListItem(i) {

            var listItem = i;
            var list = this.get('model');
            listItem.destroyRecord().then(function(){
                list.save();
            });

        },
        toggleRecipe(){
            this.toggleProperty("recipe");
        },
        saveRecipe(){
            let recipeName = this.get("recipeName");
            let list = this.get("model");
            alert(recipeName);
            let newRecipe = this.store.createRecord("recipe",{
                name: recipeName,
                list: list
            });
            list.get("recipe").addObject(newRecipe);
            newRecipe.save().then(()=>{
                this.toggleProperty("recipe");
                return list.save();
            })
        }
    }
});
