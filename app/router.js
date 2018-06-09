import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('list',{
    path: "list/:id/"
  });
  this.route('shared',{
    path: ":id"
  });
});

export default Router;
