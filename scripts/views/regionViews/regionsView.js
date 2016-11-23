var app = app || {};

app.views.regionsView = Backbone.View.extend({
    tagName: "div",
    className:"container",
    render:function(){
        let view = this;
        view.collection.each(view.addRegion, view);

        return view;
    },
    addRegion: function(region){
        console.log("region added");
        let view = this;
        let regionView = new app.views.regionView({model: region})
        view.$el.append(regionView.render().el);
    }
});