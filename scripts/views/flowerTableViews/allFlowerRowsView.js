var app = app || {};

app.allFlowerRowsView = Backbone.View.extend({
    tagName: "tbody",
    render:function(){
        let view = this;
        view.collection.each(view.addFlower, view);
        return view;
    },
    addFlower: function(flower){
        let view = this;
        let flowerView = new app.singleFlowerView({model: flower})
        view.$el.append(flowerView.render().el);
    }

});