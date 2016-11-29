var app = app || {};

app.models.singleFlowerModel = Backbone.Model.extend({
        defaults:{
            color: "Pink",
            img: "../../images/placeholder.jpg",
            link: "default"
        },
        initialize: function(){
            let singleFlower = this;
            console.log("A model instance named "+ singleFlower.get("name")+"has been"+
            "created and its costs "+singleFlower.get("price"));
        }
});