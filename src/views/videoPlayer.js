var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.reinitialize);
    this.current = this.collection.at(0);
    this.collection.forEach((video) => {
      video.on('select', () => {
        this.current = video;
        this.render();
      });
    });
  },

  reinitialize: function() {
    // console.log('test test', this.collection.at(0));
    this.current = this.collection.at(0);
    this.render();
    this.initialize();
  },

  render: function() {
    this.$el.html(this.template(this.current.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
