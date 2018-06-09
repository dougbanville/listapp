import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import firebase from 'firebase'

export default Route.extend({

    session: service(),
    //firebaseApp: Ember.inject.service(),

    
    beforeModel: function() {
      return this.get('session').fetch().catch(function() {});
    },
    actions: {
      signIn: function(provider) {
        this.get('session').open('firebase', { provider: provider}).then(function(data) {
          //this.transitionTo("home");
        });
      },
      signOut: function() {
        this.get('session').close();
      }
    }

});
