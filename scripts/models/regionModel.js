var app = app || {};

app.regionModel = Backbone.Model.extend({
        defaults:{
            abbr:"",
            area:"",
            capital:"",
            country:"",
            largest_city:"",
            name:""
        },
        initialize: function(){
        }
})