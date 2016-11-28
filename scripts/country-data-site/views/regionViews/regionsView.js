var app = app || {};

app.views.regionsView = Backbone.View.extend({
    initialize: function(options){
        this.countryCode=options.countryCode;
    },
    tagName: "div",
    className:"col-xs-6",
    render:function(){
        let view = this;
        view.$el.html("");
        if(view.collection.length>0){
            view.collection.each(view.addRegion, view);
        }
        $("#current-country").html(view.countryCode);
        return view;
    },
    addRegion: function(region){
        let view = this;
        let regionView = new app.views.regionView({model: region})
        view.$el.append(regionView.render().el);
    }
});