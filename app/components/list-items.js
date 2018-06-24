import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';

export default Component.extend({

    tagName: "section",

    classNames: ["grid-container","list-items"],

    actions:{
        check(i){
            this.check(i);
        }
    }

});
