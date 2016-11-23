

var regionsCollection = new app.api.getRegionsByCountryCode([], {country:"USA"});
regionsCollection.fetch({
	success: function(response,xhr) {
        regionsView.render();
	}
});

console.log(regionsCollection);
let regionsView = new app.views.regionsView({collection: regionsCollection});

$("#regionsList").html(regionsView.render().el);

Backbone.history.start();