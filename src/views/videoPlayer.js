var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    console.log(this.model);
    this.listenTo(this.model, 'select', this.render);
  },

  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
