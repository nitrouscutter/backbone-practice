var app= app || {}

app.greetingView = Backbone.View.extend({
    tagName: "div",
    className:"container",
    template: _.template( $("#greetingTemplate").html()),
    render: function(){
        let view = this;
        let greetingTemplate = view.template(view.model.toJSON());
        view.$el.html(greetingTemplate);
        return view;
    }
});