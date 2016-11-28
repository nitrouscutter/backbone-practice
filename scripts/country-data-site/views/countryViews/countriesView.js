var app = app || {};

app.views.countriesView = Backbone.View.extend({
    initialize: function(options){

    },
    tagName: "div",
    className:"col-xs-6",
    render:function(){
        let view = this;
        view.$el.html("");
        if(view.collection.length>0){
            view.collection.each(view.addCountry, view);
        }
        return view;
    },
    addCountry: function(country){
        let view = this;
        let countryView = new app.views.countryView({model: country})
        view.$el.append(countryView.render().el);
    }
});