import Controller from '@ember/controller';

export default Controller.extend({


    actions: {
        check(i){
           let item = i;

           if(item.get("active")){
                item.set("active",false);
           }else{
                item.set("active",true);

           }
           item.save
        }
    }
});
