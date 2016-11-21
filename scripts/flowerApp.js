// more information on backbone - http://backbonejs.org/

let redRoses = new app.singleFlower({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img:"images/redRoses.jpg",
    link:"redRose"
});

let rainbowRoses = new app.singleFlower({
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    link:"rainbowRose"
});

let heirloomRoses = new app.singleFlower({
    name: "Heirloom Roses",
    price: 19.95,
    img:"images/heirloomRoses.jpg",
    link:"heirloomRose"
});

let flowerGroup = new app.flowersCollection([
    redRoses,rainbowRoses
]);

let flowerGroupView = new app.allFlowersView({collection: flowerGroup});
$("#allFlowers").html(flowerGroupView.render().el);

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
let tantalizingTulips = new app.singleFlower({
    name: "Tantalizing Tulips",
    price: 9.99,
    color: "purple",
    img:"image/tantalizingTulips.jpg",
    key:"originCountry",
    value:"Holland"
});
let fleurDeLis = new app.singleFlower({
    name: "Fleur-de-lis",
    price: 69.99,
    color:"red",
    img:"image/fleur-de-lis.jpg",
});
let europeanFlowers = new app.flowersCollection([
    tantalizingTulips,fleurDeLis
]);
console.log(europeanFlowers.toJSON());