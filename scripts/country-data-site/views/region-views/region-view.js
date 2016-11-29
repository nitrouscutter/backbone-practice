var app= app || {}

app.views.regionView = Backbone.View.extend({
    tagName: "div",
    className:"row light-grey-rounded",
    template: _.template( $("#regionTemplate").html()),
    render: function(){
        let view = this;
        let singleListItemTemplate = view.template(view.model.toJSON());
        view.$el.html(singleListItemTemplate);
        return view;
    }
});