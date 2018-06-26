var VideoListView = Backbone.View.extend({
    
  el: '.list',
  template: templateURL('src/templates/videoList.html'),

  initialize: function() {
    console.log('Initializing VideoListView');
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    _.each(this.collection, () => {
      this.renderVideo();
    }, this);

    return this;
  },

  renderVideo: function(video) {
    console.log('Rendering video')
    var videoListEntryView = new VideoListEntryView({model: video});
  }


});
