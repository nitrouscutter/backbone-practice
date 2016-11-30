var app = app || {};

app.views.parallelogramsView = Backbone.View.extend({
    render: function() {
        var ctx=this.$el.get(0).getContext("2d");
        
        this.collection.each(function(model) {
            var view=new app.views.parallelogramView({ctx:ctx,model:model});
            view.render();            
        })
    }
});