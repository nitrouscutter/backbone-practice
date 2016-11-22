var app = app || {};

app.allListItemView = Backbone.View.extend({
    tagName: "section",
    className:"",
    render:function(){
        let view = this;
        view.collection.each(view.addFlower, view);
        return view;
    },
    addFlower: function(flower){
        let view = this;
        let flowerView = new app.singleListItemView({model: flower})
        view.$el.append(flowerView.render().el);
    }
});