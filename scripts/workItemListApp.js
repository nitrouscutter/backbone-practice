// more information on backbone - http://backbonejs.org/

let redRoses = new app.singleFlowerModel({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img:"images/redRoses.jpg",
    link:"redRose"
});

let rainbowRoses = new app.singleFlowerModel({
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    link:"rainbowRose"
});

let heirloomRoses = new app.singleFlowerModel({
    name: "Heirloom Roses",
    price: 19.95,
    img:"images/heirloomRoses.jpg",
    link:"heirloomRose"
});

let tantalizingTulips = new app.singleFlowerModel({
    name: "Tantalizing Tulips",
    price: 9.99,
    color: "purple",
    img:"images/tantalizingTulips.jpg",
    key:"originCountry",
    value:"Holland"
});

let fleurDeLis = new app.singleFlowerModel({
    name: "Fleur-de-lis",
    price: 69.99,
    color:"red",
    img:"images/fleur-de-lis.jpg",
});

let flowerGroup = new app.flowersCollection([
    redRoses,rainbowRoses, heirloomRoses,tantalizingTulips,fleurDeLis
]);
console.log(flowerGroup);
let flowerGroupView = new app.allListItemView({collection: flowerGroup});
$("#divList").html(flowerGroupView.render().el);

Backbone.history.start();