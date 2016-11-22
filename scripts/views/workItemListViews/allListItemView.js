var app = app || {};

app.allListItemView = Backbone.View.extend({
    tagName: "section",
    className:"",
    render:function(){
        let view = this;
        view.collection.each(view.addFlower, view);

        $("#addFlower").click(function(){
            let name = $("#flowerNameInput").val();
            let price = $("#flowerPriceInput").val();
            let newFlower = new app.singleFlower({
                name: name,
                price: price
            });
            view.addFlower(newFlower);
            // clear inputs
            $("#flowerNameInput").val("");
            $("#flowerPriceInput").val("");
        });

        return view;
    },
    addFlower: function(flower){
        let view = this;
        let flowerView = new app.singleListItemView({model: flower})
        view.$el.append(flowerView.render().el);
    }
});