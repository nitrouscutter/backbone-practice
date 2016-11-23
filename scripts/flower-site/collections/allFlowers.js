var app = app || {}

app.collections.flowersCollection = Backbone.Collection.extend({
    model: app.models.singleFlowerModel
});