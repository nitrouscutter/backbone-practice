var app = app || {};

app.singleFlower = Backbone.Model.extend({
        defaults:{
            color: "Pink",
            img: "images/placeholder.jpg",
            link: "default"
        },
        initialize: function(){
            let singleFlower = this;
            console.log("A model instance named "+ singleFlower.get("name")+"has been"+
            "created and its costs "+singleFlower.get("price"));

            //--------------------
            // change events
            //--------------------
            // any changes
            this.on('change', function(){
                console.log("Something in our model has changed");
            });

            // property changes
            this.on('change:price', function(){
                let singleFlower = this;
                console.log("The price for the "+singleFlower.get("name") + "model just changed to $"+ singleFlower.get("price") + " dollars");
            })
        }
})