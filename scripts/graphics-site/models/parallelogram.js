var app = app || {};

app.models.parallelogram = Backbone.Model.extend({
        defaults: {
            x: 0,
            y: 0,
            w: 1,
            h: 1,
            lineColor: "#FF9000",
            fillColor:"#00ff99",
            linewidth: 3
        }
});