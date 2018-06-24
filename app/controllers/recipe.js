import Controller from '@ember/controller';

export default Controller.extend({

    firebaseApp: Ember.inject.service(),

    storageRef: "",
    file: "",

    actions:{
        save(){
            let recipe = this.get("model")
            let recipeName = this.get("model").name;
            recipe.save();
            alert("saved");
        },
        didSelectImage(files){
            let reader = new FileReader();
            // Ember.run.bind
             reader.onloadend = Ember.run.bind(this, function(){
                var dataURL = reader.result;
                var output = document.getElementById("output");
                output.src = dataURL;
                this.set("file", files[0]);
             });
             //debugger;
             reader.readAsDataURL(files[0]);

             var storageRef = this.get("firebaseApp").storage().ref();
             var path = "images/recipes/" + this.get("model").id + ".jpg";
             var metadata = {
                contentType: "image/jpg"
                };
             var uploadTask = storageRef.child(path).put(files[0], metadata);
             //console.log(path);
             let recipe = this.get("model");

             uploadTask.on("state_changed", function(snapshot){
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                console.log(snapshot.state);
                }, function(error) {
                }, function() {
                var downloadURL = uploadTask.snapshot.downloadURL;
                console.log(downloadURL);
                recipe.set("image",downloadURL);
                recipe.save();

                /*newPlan.set("imageUrl", downloadURL);
                newPlan.save().then(() => ctrl.transitionToRoute("plans"));
                this.set("file", "");
                this.set("selectedCategory", "");
                this.set(document.getElementById("output").src, "");
                this.set("days", "");
                this.set("isDisabled", true);*/
                });
             
             },
    }
});
