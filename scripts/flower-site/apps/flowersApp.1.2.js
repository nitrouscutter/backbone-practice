var app = app || {};

let flowerGroup = new app.collections.flowersCollection(app.testData.flowerData());

let flowerGroupView = new app.views.allFlowersView({collection: flowerGroup});
$("#allFlowers").html(flowerGroupView.render().el);