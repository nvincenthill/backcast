let VideoListEntryView = Backbone.View.extend({
    initialize: function() {
        console.log('Initializing VideoListEntryView');
        console.log(this.render);
        let self = this;
        this.model.on('change', function() {
          self.render();
        });
    },
    render: function() {
        console.log('Rendering VideoListEntryView');
        this.$el.html(this.template(this.model.attributes));
        return this.$el;
    }
});