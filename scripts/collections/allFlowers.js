var app = app || {}

app.flowersCollection = Backbone.Collection.extend({
    model: app.singleFlower
});