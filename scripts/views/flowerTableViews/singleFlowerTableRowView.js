var app= app || {}

// notes:
// _ references underscore.js, and _.template is a property that lets underscore build the template
// uses jquery to grab the element in the index.html with an id of "flowerElement"

app.singleFlowerView = Backbone.View.extend({
    tagName: "tr",
    className:"",
    template: _.template( $("#flowerTable").html()),
    render: function(){
        let view = this;
        let flowerTemplate = view.template(view.model.toJSON());
        view.$el.html(flowerTemplate);
        return view;
    }
});