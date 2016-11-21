var redRoses = new app.singleFlower({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img:"image/redRoses.jpg",
    link:"redRose"
});

var rainbowRoses = new app.singleFlower({
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    link:"rainbowRose"
});

var heirloomRoses = new app.singleFlower({
    name: "Heirloom Roses",
    price: 19.95,
    img:"image/heirloomRoses.jpg",
    link:"heirloomRose"
});

var flowerGroup = new app.FlowersCollection([
    redRoses,rainbowRoses
]);

// Test
flowerGroup.add(heirloomRoses);
console.log(flowerGroup.toJSON());

//console.log(redRoses.toJSON());
//console.log(rainbowRoses.toJSON());
//console.log(heirloomRoses.toJSON());

//rainbowRoses.set('price', 20);