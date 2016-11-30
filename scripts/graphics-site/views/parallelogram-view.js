var app = app || {};

app.views.parallelogramView = Backbone.View.extend({
    
    initialize: function(options){
      this.options = options;  
    },
    render : function() {
        var model=this.model, ctx=this.options.ctx;

        ctx.fillStyle = model.get("fillColor");
        ctx.globalAlpha = 0.1;
        ctx.fillRect(model.get("x"), model.get("y"), model.get("w"), model.get("h")); //transparent box in the back
        ctx.globalAlpha = 1;
        ctx.strokeStyle = model.get("lineColor");
        ctx.lineWidth = model.get("linewidth");
        ctx.strokeRect(model.get("x"), model.get("y"), model.get("w"), model.get("h")); //rectangle on top  
    }
});