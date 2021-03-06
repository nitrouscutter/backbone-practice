var app = app || {};

// calls api
// 
app.api.getRegionsByCountryCode = app.collections.regionsCollection.extend({
    model: app.models.regionModel,
    initialize: function(models, options) {
        this.id = options.id;
        this.country = options.country;
    },
    parse: function (response) {
        console.log(response);
        return response.RestResponse.result;
    },
    url: function() {
        return "http://services.groupkt.com/state/get/{country}/all".replace("{country}", this.country);
    }
});

// GET all
app.api.getAllCountries = app.collections.countriesCollection.extend({
    model: app.models.countryModel,
    parse: function (response) {
        console.log(response);
        return response.RestResponse.result;
    },
    url: function() {
        return "http://services.groupkt.com/country/get/all";
    }
});
