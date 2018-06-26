var VideoListView = Backbone.View.extend({
    
  el: '.list',
  template: templateURL('src/templates/videoList.html'),

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.append(this.template());
    this.collection.forEach(this.renderVideo, this);
    return this.$el;
  },

  renderVideo: function(video) {
    console.log('testing', video);
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.append(videoListEntryView.render());
  }

});
