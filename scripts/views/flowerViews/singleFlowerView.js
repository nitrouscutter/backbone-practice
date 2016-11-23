var app= app || {}

// notes:
// _ references underscore.js, and _.template is a property that lets underscore build the template
// uses jquery to grab the element in the index.html with an id of "flowerElement"

app.views.singleFlowerView = Backbone.View.extend({
    tagName: "div",
    className:"flowerListItem col-sm-4",
    template: _.template( $("#flowerTemplate").html()),
    render: function(){
        let view = this;
        let flowerTemplate = view.template(view.model.toJSON());
        // older version flowerTemplate = _.template( $("#flowerElement").html());
        view.$el.html(flowerTemplate);
        return view;
    },
    events: {
        'mouseover':'addBgColor',
        'mouseout':'removeBgColor'
    },
    addBgColor: function(){
        this.$el.addClass("bgColorImage");
    },
    removeBgColor: function(){
        this.$el.removeClass("bgColorImage");
    }
});