var app = app||{};
// the point of routing is to put the app in a specific state by url

app.router = Backbone.Router.extend({
    routes:{
        "":"noCopy",
        "heirloomRose": "heirloomRoseMessage",
        "rainbowRose" : "rainbowRoseMessage",
        "redRose" : "redRoseMessage",
        "default" : "defaultMessage"
    },
    noCopy: function(){
        $("#copy").html("");
    },
    heirloomRoseMessage:function(){
        $("#copy").html("Heirloom Roses are great Mother's Day flowers");
    },
    rainbowRoseMessage: function(){
        $("#copy").html("Choose Rainbow Roses for your wedding");
    },
    redRoseMessage:function(){
        $("#copy").html("Oh Valentine's Day, give that special someone Red Roses");
    },
    defaultMessage:function(){
        $("#copy").html("Pretty flowers for anyone");
    }
});