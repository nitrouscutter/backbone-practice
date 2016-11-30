var app = app || {};

app.views.starsView = Backbone.View.extend({
    render: function() {
        var ctx=this.$el.get(0).getContext("2d");
        
        this.collection.each(function(model) {
            var view=new app.views.starView({ctx:ctx,model:model});
            view.render();            
        })
    }
});