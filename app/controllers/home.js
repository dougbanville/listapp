import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend({

    session : service(),

    name: computed("session",function(){
        return this.get("session").get("currentUser").displayName;
    }),

    actions:{
        saveUser(){
            let displayName = this.get("session").get("currentUser").displayName;
            let uid = this.get("session").get("currentUser").uid
            let newUser = this.store.createRecord('user',{
                id : uid,
                email : this.get("session").get("currentUser").email,
                name: displayName
            });
            newUser.save();
            this.set("user",newUser);
        },
        newList(){
            var newList = this.store.createRecord('list', {
                listName: this.get('listName')
              });
              
              // Get the parent post
              var userTable = this.get('user');
              console.log(userTable.get("id"))
              userTable.get('list').addObject(newList);
              
              // Save the comment, then save the post
              newList.save().then(function() {
                return userTable.save();
              });
        }
    }
});
