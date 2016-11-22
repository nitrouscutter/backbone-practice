var app = app || {};

app.regionsView = Backbone.View.extend({
    tagName: "section",
    className:"",
    render:function(){
        let view = this;
        view.collection.each(view.addRegion, view);

        return view;
    },
    addRegion: function(region){
        console.log("region added");
        let view = this;
        let regionView = new app.regionView({model: region})
        view.$el.append(regionView.render().el);
    }
});