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

let tantalizingTulips = new app.singleFlower({
    name: "Tantalizing Tulips",
    price: 9.99,
    color: "purple",
    img:"images/tantalizingTulips.jpg",
    key:"originCountry",
    value:"Holland"
});

let fleurDeLis = new app.singleFlower({
    name: "Fleur-de-lis",
    price: 69.99,
    color:"red",
    img:"images/fleur-de-lis.jpg",
});

let flowerGroup = new app.flowersCollection([
    redRoses,rainbowRoses, heirloomRoses,tantalizingTulips,fleurDeLis
]);

let flowerGroupView = new app.allFlowerRowsView({collection: flowerGroup});
$("#flowerInventoryTableBody").replaceWith(flowerGroupView.render().el);
