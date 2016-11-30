var app = app || {};

app.views.starView = Backbone.View.extend({
    
    initialize: function(options){
      this.options = options;  
    },
    render : function() {
        var model=this.model, ctx=this.options.ctx;
        ctx.beginPath();

        // move into the middle of the canvas, just to make room
        ctx.translate(model.get("x"), model.get("y"));
        ctx.fillStyle = model.get("fillColor");

        // initial offset rotation so our star is straight
        //ctx.rotate((Math.PI * 1 / 10));

        // make a point, 5 times
        for (var i = 5; i--;) {
            // draw line up
            ctx.lineTo(0, model.get("lineLength"));
            // move origin to current same location as pen
            ctx.translate(0, model.get("lineLength"));
            // rotate the drawing board
            ctx.rotate((Math.PI * 2 / 10));
            // draw line down
            ctx.lineTo(0, -model.get("lineLength"));
            // again, move origin to pen...
            ctx.translate(0, - model.get("lineLength"));
            // ...and rotate, ready for next arm
            ctx.rotate(-(Math.PI * 6 / 10));
        }
        // last line to connect things up
        ctx.lineTo(0, model.get("lineLength"));
        ctx.fill();
        ctx.closePath();
    }
});