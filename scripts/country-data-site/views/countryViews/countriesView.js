var app = app || {};

app.views.countriesView = Backbone.View.extend({
    initialize: function(options){
    },
    tagName: "div",
    className:"container",
    render:function(){
        let view = this;
        console.log("rendering countries view", view.collection);
        view.collection.each(view.addCountry, view);
        return view;
    },
    addCountry: function(country){
        let view = this;
        console.log("adding country");
        let countryView = new app.views.countryView({model: country})
        view.$el.append(countryView.render().el);
    }
});