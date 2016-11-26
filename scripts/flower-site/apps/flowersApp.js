// more information on backbone - http://backbonejs.org/
var app = app || {};

let flowerGroup = new app.collections.flowersCollection(app.testData.flowerData());

let flowerGroupView = new app.views.allFlowersView({collection: flowerGroup});
$("#allFlowers").html(flowerGroupView.render().el);

var flowerRouter = new app.routes.router();

Backbone.history.start();

// Test simple model api call
var greetingModel = new app.models.greetingModel();
greetingModel.fetch({
    dataType: 'json',
    jsonpCallback: 'callback',
    type: 'GET',
    success: function (response) {
        console.log("Found the greeting: " + response.get("content"));
        let greetingView = new app.views.greetingView({model: greetingModel});
        $("#greeting").html(greetingView.render().el);
    }
});

//---------------
// Test
//---------------

// Collections
// Add
//flowerGroup.add(heirloomRoses);
// Remove
//flowerGroup.remove(redRoses);
//console.log(flowerGroup.toJSON());

// Model Instances
//console.log(redRoses.toJSON());
//console.log(rainbowRoses.toJSON());
//console.log(heirloomRoses.toJSON());

// Setting model property
//rainbowRoses.set('price', 20);



//----------------------------
// Challeng objectives
//----------------------------

// let europeanFlowers = new app.flowersCollection([
//     tantalizingTulips,fleurDeLis
// ]);
// console.log(europeanFlowers.toJSON());