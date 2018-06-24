import Controller from '@ember/controller';

export default Controller.extend({

    actions:{
        save(){
            let recipe = this.get("model")
            let recipeName = this.get("model").name;
            recipe.save();
            alert("saved");
        }
    }
});
