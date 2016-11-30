
let canvas = $("canvas");
let starCanvas = $("canvas");

//---------------------
// render parallelogram collection 
//---------------------
            
var parallelogramCollection = new app.models.parallelogramCollection();
parallelogramCollection.add({x:150,y:150,w:100,h:100, lineColor:"#FF0000"});
parallelogramCollection.add({x:10,y:10,w:100,h:300});
parallelogramCollection.add({x:300,y:200,w:400,h:100, fillColor:"#800000"});
        
var parallelogramsView =new app.views.parallelogramsView({
    el:canvas,
    collection : parallelogramCollection
});
parallelogramsView.render();

//---------------------
// render star collection
//---------------------
 var starCollection = new app.models.starCollection();
 starCollection.add({lineLength:5, x:50, y:50});
 starCollection.add({lineLength:5, x:160, y:160});
 starCollection.add({lineLength:5, x:160, y:50});
 starCollection.add({lineLength:5, x:50, y:160});

 var starsView =new app.views.starsView({
     el:canvas,
     collection : starCollection
 });
 starsView.render();

//---------------------
// render single star view 
//---------------------

var starctx = starCanvas.get(0).getContext("2d");

var starModel = new app.models.star({
    x:100,
    y:200,
    lineLength:25,
    fillColor:"#0000FF"
});

var starView = new app.views.starView({ctx:starctx, model:starModel});
starView.render();

