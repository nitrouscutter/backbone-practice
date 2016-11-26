
let countryCode = "USA";
let regionsCollection = renderRegionsByCountryCode(countryCode);

let regionsView = new app.views.regionsView({collection: regionsCollection, countryCode:countryCode});

$("#regionsList").html(regionsView.render().el);

Backbone.history.start();

$("#search-regions-button").click(function(){
	let countryCode=$("#country-code-input").val();
	regionsCollection = renderRegionsByCountryCode(countryCode);
	regionsView = new app.views.regionsView({collection: regionsCollection, countryCode:countryCode});

	$("#regionsList").html(regionsView.render().el);
});

$("#search-all-regions-button").click(function(){
	regionsCollection = new app.api.getAllRegions();
	regionsCollection.fetch();
	regionsView = new app.views.regionsView({collection: regionsCollection, countryCode:"All"});

	$("#regionsList").html(regionsView.render().el);
});

function renderRegionsByCountryCode(countryCode){
	let regionsCollection = new app.api.getRegionsByCountryCode([], {country:countryCode});
		regionsCollection.fetch({
			success: function(response,xhr) {
			regionsView.render();
			}
		});
	return regionsCollection;
}