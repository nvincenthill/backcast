var VideoListView = Backbone.View.extend({
    
  template: templateURL('src/templates/videoList.html'),

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.collection.at(0).select();
    this.$el.children().detach();
    this.$el.append(this.template());
    this.collection.forEach(this.renderVideo, this);
    return this.$el;
  },

  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.children().append(videoListEntryView.render());
  }

});
