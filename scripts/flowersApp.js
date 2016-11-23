// more information on backbone - http://backbonejs.org/

let redRoses = new app.models.singleFlowerModel({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img:"images/redRoses.jpg",
    link:"redRose"
});

let rainbowRoses = new app.models.singleFlowerModel({
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    link:"rainbowRose"
});

let heirloomRoses = new app.models.singleFlowerModel({
    name: "Heirloom Roses",
    price: 19.95,
    img:"images/heirloomRoses.jpg",
    link:"heirloomRose"
});

let tantalizingTulips = new app.models.singleFlowerModel({
    name: "Tantalizing Tulips",
    price: 9.99,
    color: "purple",
    img:"images/tantalizingTulips.jpg",
    key:"originCountry",
    value:"Holland"
});

let fleurDeLis = new app.models.singleFlowerModel({
    name: "Fleur-de-lis",
    price: 69.99,
    color:"red",
    img:"images/fleur-de-lis.jpg",
});

let flowerGroup = new app.collections.flowersCollection([
    redRoses,rainbowRoses, heirloomRoses,tantalizingTulips,fleurDeLis
]);

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