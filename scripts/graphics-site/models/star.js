var app = app || {};

app.models.star = Backbone.Model.extend({
        defaults: {
            x: 0,
            y: 0,
            lineLength: 20,
            fillColor:"#000000"
        }
});