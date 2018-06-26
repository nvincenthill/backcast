var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({ collection: this.videos, el: '.list' }).render();
    this.renderVideoPlayer.call(this, this.videos.models[0]);
    new SearchView({ collection: this.videos, el: '.search' }).render();
    return this;
  },

  //ATTEMPT TO JUST RENDER ONE VIDEO FROM VIDEOLISTENTRY
  renderVideoPlayer: function(video) {
    let player = new VideoPlayerView({ model: video, el: '.player' }).render();
  },

  template: templateURL('src/templates/app.html')

});
