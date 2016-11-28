var app = app || {};
let countryDataModel = new app.models.countryDataModel({
	countryCode: "USA",
});
let countryDataView = new app.views.countryDataView({model: countryDataModel});
$(".main").append(countryDataView.render().el);

Backbone.history.start();