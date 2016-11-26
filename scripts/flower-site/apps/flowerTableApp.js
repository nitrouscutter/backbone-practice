// more information on backbone - http://backbonejs.org/

let flowerGroup = new app.collections.flowersCollection(app.testData.flowerData());

let flowerGroupView = new app.views.allFlowerRowsView({collection: flowerGroup});
$("#flowerInventoryTableBody").replaceWith(flowerGroupView.render().el);
