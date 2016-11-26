var app= app || {}

app.views.countryView = Backbone.View.extend({
    tagName: "div",
    className:"row countryView",
    template: _.template( $("#countryTemplate").html()),
    render: function(){
        let view = this;
        let singleListItemTemplate = view.template(view.model.toJSON());
        view.$el.html(singleListItemTemplate);
        return view;
    }
});