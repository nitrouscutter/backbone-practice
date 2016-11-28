var app = app || {};

app.models.countryModel = Backbone.Model.extend({
        defaults:{
            name:"",
            alpha2_code:"",
            alpha3_code:""
        },
        initialize: function(){
        }
});