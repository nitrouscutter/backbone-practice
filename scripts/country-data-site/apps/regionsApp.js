
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

$("#search-all-countries-button").click(function(){
	countriesCollection = new app.api.getAllCountries();
	countriesCollection.fetch({
			success: function(response,xhr) {
			countriesView.render();
			}
		});
	console.log(countriesCollection);
	countriesView = new app.views.countriesView({collection: countriesCollection});

	$("#regionsList").html(countriesView.render().el);
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