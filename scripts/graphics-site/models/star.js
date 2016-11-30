var app = app || {};

app.models.star = Backbone.Model.extend({
        defaults: {
            x: 0,
            y: 0,
            lineLength: 20,
            fillColor:"#000000",
            strokeColor:"#000000",
            spikes:5,
            outerRadius: 15,
            innerRadius: 30
        }
});