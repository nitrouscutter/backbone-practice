var app= app || {}

app.views.singleListItemView = Backbone.View.extend({
    tagName: "div",
    className:"row singleListItemRow",
    template: _.template( $("#singleListItemTemplate").html()),
    render: function(){
        let view = this;
        let singleListItemTemplate = view.template(view.model.toJSON());
        view.$el.html(singleListItemTemplate);
        return view;
    },
    events: {
        "click #viewFlower": "viewFlower",
        "click #deleteFlower": "deleteFlower",
    },
    viewFlower: function(){
        this.animation();
    },
    deleteFlower: function(){
        this.remove();
    },
    animation: function motion(){
        let view = this;
        var dot = view.$el.find(".dot");
        dot.animate({marginTop:30},500).animate({marginTop:0},500);
    }
});
