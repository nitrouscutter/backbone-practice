var app = app || {}

app.collections.flowersCollection = Backbone.Collection.extend({
    model: app.models.singleFlowerModel // auto converts array of json objects to this model
});