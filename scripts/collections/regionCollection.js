var app = app || {}

app.collections.regionsCollection = Backbone.Collection.extend({
    model: app.models.regionModel
});