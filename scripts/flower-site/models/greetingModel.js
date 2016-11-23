var app = app || {};

// simple model api call
app.models.greetingModel = Backbone.Model.extend({
    defaults: {
        id: "",
        content: ""
    },
    idAttribute: "id",
    initialize: function () {
        console.log('Greeting has been initialized');
        this.on("invalid", function (model, error) {
            console.log("Houston, we have a problem: " + error)
        });
    },
    constructor: function (attributes, options) {
        console.log('Greeting\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function (attr) {
        if (!attr.content) {
            return "Invalid content supplied."
        }
    },
    urlRoot: 'http://rest-service.guides.spring.io/greeting'
});