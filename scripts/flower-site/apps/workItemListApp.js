// more information on backbone - http://backbonejs.org/

let flowerGroup = new app.collections.flowersCollection(app.testData.flowerData());

let flowerGroupView = new app.views.allListItemView({collection: flowerGroup});
$("#divList").html(flowerGroupView.render().el);

Backbone.history.start();