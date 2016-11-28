var app = app || {};

app.views.countryDataView = Backbone.View.extend({
    initialize: function(options){
        let view = this;
        let countryCode = view.model.get("countryCode");
        view.regionsCollection = new app.api.getRegionsByCountryCode([], {country:countryCode});
        view.countriesCollection = new app.api.getAllCountries();
        view.regionsView = new app.views.regionsView({collection: view.regionsCollection, countryCode:countryCode});
        view.countriesView = new app.views.countriesView({collection:[]});
        view.renderRegionsByCountryCode();
        view.model.on('change', this.render, this);
    },
    tagName: "div",
    className:"row",
    template: _.template( $("#country-data-template").html()),
    render:function(){
        let view = this;
        let template = view.template(view.model.toJSON());
        view.$el.html(template);
        view.$el.append(view.regionsView.render().el);
        view.$el.append(view.countriesView.render().el);
        return view;
    },
    events: {
        "click #search-regions-button": "searchRegionsByCountryCode",
        "click #search-all-countries-button": "searchAllCountries",
    },
    searchRegionsByCountryCode: function(){
        let view = this;
        view.model.set({
            countryCode: $("#country-code-input").val()
        });
        view.renderRegionsByCountryCode();
        view.regionsView.collection = view.regionsCollection;
        view.regionsView.countryCode = view.countryCode;
    },
    searchAllCountries: function(){
        let view = this;
        view.countriesCollection.fetch({
                success: function(response,xhr) {
                    view.countriesView.collection = response;
                    view.countriesView.render();
                }
            });
        view.countriesView.collection = view.countriesCollection;
    },
    addCountry: function(country){
        let view = this;
        let countryView = new app.views.countryView({model: country})
        view.$el.append(countryView.render().el);
    },
    renderRegionsByCountryCode: function(){
        let view = this;
        let countryCode = view.model.get("countryCode");
        view.regionsCollection.country = countryCode;
		view.regionsCollection.fetch({
			success: function(response,xhr) {
                view.regionsView. collection = response;
			    view.regionsView.render();
			}
		});
    }
});