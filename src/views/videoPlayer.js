var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.current = this.collection.at(0);
    this.collection.forEach((video) => {
      video.on('select', () => {
        this.current = video;
        this.render();
      });
    });
  },

  render: function() {
    this.$el.html(this.template(this.current.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
