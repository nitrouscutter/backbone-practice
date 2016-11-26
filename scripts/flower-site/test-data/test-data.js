var app = app || {};

let redRoses = {
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img:"../../images/redRoses.jpg",
    link:"redRose"
};

let rainbowRoses = {
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    link:"rainbowRose"
};

let heirloomRoses = {
    name: "Heirloom Roses",
    price: 19.95,
    img:"../../images/heirloomRoses.jpg",
    link:"heirloomRose"
};

let tantalizingTulips = {
    name: "Tantalizing Tulips",
    price: 9.99,
    color: "purple",
    img:"../../images/tantalizingTulips.jpg",
    key:"originCountry",
    value:"Holland"
};

let fleurDeLis = {
    name: "Fleur-de-lis",
    price: 69.99,
    color:"red",
    img:"../../images/fleur-de-lis.jpg",
};

app.testData.flowerData = function(){
    return [redRoses,rainbowRoses, heirloomRoses,tantalizingTulips,fleurDeLis];
}
