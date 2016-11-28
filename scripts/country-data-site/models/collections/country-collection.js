var app = app || {}

app.collections.countriesCollection = Backbone.Collection.extend({
    model: app.models.countryModel
});