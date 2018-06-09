import Route from '@ember/routing/route';
//import { Ember } from 'ember';
import { inject as service } from '@ember/service';


export default Route.extend({

    session : service(),

    model(){

        return Ember.RSVP.hash({
            user: this.store.findRecord("user",this.get('session').content.uid)
            .catch(e=>{
                console.log(e + "nowt")
            })
        })
    },

    setupController(controller,models){
        controller.set("user",models.user);
    }
});
