
var getAllAmericanStates = new app.getRegionsByCountryCode();
getAllAmericanStates.fetch("USA",{
    dataType: 'json',
    jsonpCallback: 'callback',
    type: 'GET',
    success: function (response) {
        console.log(response);
        let regionsGroupView = new app.regionsView({collection: response});
        $("#regionsList").html(regionsGroupView.render().el);
    }
});




Backbone.history.start();