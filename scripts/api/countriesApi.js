var app = app || {};

// calls api
// app.getAllCountries = Backbone.Model.extend({
//     urlRoot: 'http://services.groupkt.com/country/get/all'
// });

app.countriesApi.getRegionsByCountryCode = Backbone.Collection.extend({
    model: app.models.regionModel,
    initialize: function(models, options) {
        this.id = options.id;
        this.country = options.country;
    },
    parse: function (response) {
        return response.RestResponse.result;
    },
    url: function() {
        return "http://services.groupkt.com/state/get/{country}/all".replace("{country}", this.country);
    }
});
