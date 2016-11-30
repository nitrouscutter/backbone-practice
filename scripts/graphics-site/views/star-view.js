var app = app || {};

app.views.starView = Backbone.View.extend({
    
    initialize: function(options){
      this.options = options;  
    },
    render : function() {
        let model=this.model; 
        let ctx=this.options.ctx;
        let spikes = model.get("spikes");
        let cx = model.get("x");
        let cy = model.get("y");
        let outerRadius = model.get("outerRadius");
        let innerRadius = model.get("innerRadius");

        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        let step = Math.PI / spikes;
        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius)
        for (i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y)
            rot += step

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y)
            rot += step
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.lineWidth=5;
        ctx.strokeStyle= model.get("strokeColor");
        ctx.stroke();
        ctx.fillStyle= model.get("fillColor");
        ctx.fill();
        
    }
});