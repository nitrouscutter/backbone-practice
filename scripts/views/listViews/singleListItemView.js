var app= app || {}

app.singleListItemView = Backbone.View.extend({
    tagName: "div",
    className:"row singleListItemRow",
    template: _.template( $("#singleListItem").html()),
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
        this.loopAnimation();
    },
    deleteFlower: function(){
        this.remove();
    },
    loopAnimation: function loop(){
        let view = this;
        var dot = view.$el.find(".dot");
        dot.animate({marginTop:30},500).animate({marginTop:0},500);
    }
});
