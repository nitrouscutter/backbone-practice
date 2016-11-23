var app = app || {};

app.views.allFlowersView = Backbone.View.extend({
    tagName: "section",
    render:function(){
        let view = this;
        view.collection.each(view.addFlower, view);
        return view;
    },
    addFlower: function(flower){
        let view = this;
        let flowerView = new app.views.singleFlowerView({model: flower})
        view.$el.append(flowerView.render().el);
    }
});