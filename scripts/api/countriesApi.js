var app = app || {};

// calls api
// app.getAllCountries = Backbone.Model.extend({
//     urlRoot: 'http://services.groupkt.com/country/get/all'
// });

// custom api call
app.getRegionsByCountryCode = Backbone.Collection.extend({
    model: app.regionModel,
    url: "http://services.groupkt.com/state/get/{country}/all",
    parse: function(response){

        return response;
    },
    fetch: function (country, options) {
        options = options || {};
        if (options.url === undefined) {
            options.url = this.url.replace("{country}",country)
        }
        var result = Backbone.Model.prototype.fetch.call(this, options);

        return Backbone.Model.prototype.fetch.call(this, options);
    },
});
