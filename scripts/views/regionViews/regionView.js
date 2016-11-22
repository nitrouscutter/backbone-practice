var app= app || {}

app.regionView = Backbone.View.extend({
    tagName: "div",
    className:"row singleListItemRow",
    template: _.template( $("#regionTemplate").html()),
    render: function(){
        let view = this;
        let singleListItemTemplate = view.template(view.model.toJSON());
        view.$el.html(singleListItemTemplate);
        return view;
    }
});