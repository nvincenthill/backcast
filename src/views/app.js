var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    // this.current = this.videos.at(0);
    this.videos.search('my backbone hurts');
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({ collection: this.videos, el: '.list' });
    new VideoPlayerView({ collection: this.videos, el: '.player' }).render();
    new SearchView({ collection: this.videos, el: '.search' }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
