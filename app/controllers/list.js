import Controller from '@ember/controller';

export default Controller.extend({

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

        }
    }
});
