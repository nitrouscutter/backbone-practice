var app = app || {};

// calls api
app.countryModel = Backbone.Model.extend({
    defaults: {
        name: "",
        alpha2_code: "",
        alpha3_code: ""
    },
    initialize: function () {
        console.log('country has been initialized');
        this.on("invalid", function (model, error) {
            console.log("Houston, we have a problem: " + error)
        });
    },
    constructor: function (attributes, options) {
        console.log('country\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function (attr) {
        if (!attr.content) {
            return "Invalid content supplied."
        }
    },
    urlRoot: 'http://services.groupkt.com/country/get/all'
});