var app = app || {};

app.views.countryDataView = Backbone.View.extend({
    initialize: function(options){
        let view = this;
        view.countryCode = view.model.get("countryCode");
        view.regionsCollection = new app.api.getRegionsByCountryCode([], {country:view.countryCode});
        view.countriesCollection = new app.api.getAllCountries();
        view.regionsView = new app.views.regionsView({collection: view.regionsCollection, countryCode:view.countryCode});
        view.countriesView = new app.views.countriesView({collection:[]});
        // render default USA country code regions
        view.renderRegionsByCountryCode();
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
        "submit #seach-regions-form":"searchRegionFormSubmit",
        "click #search-all-countries-button": "searchAllCountries",
    },
    searchRegionFormSubmit:function(event){
        event.preventDefault();
        this.searchRegionsByCountryCode();
    },
    searchRegionsByCountryCode: function(){
        let view = this;
        view.model.set({
            countryCode: $("#country-code-input").val()
        });
        view.renderRegionsByCountryCode();
        $("#country-code-input").select();
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
                view.regionsCollection = response;
			    view.regionsView.render();
			}
		});
    }
});
