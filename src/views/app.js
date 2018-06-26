var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    // this.current = this.videos.at(0);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({ collection: this.videos, el: '.list' }).render();


    this.renderVideoPlayer();


    new SearchView({ collection: this.videos, el: '.search' }).render();
    return this;
  },

  //ATTEMPT TO JUST RENDER ONE VIDEO FROM VIDEOLISTENTRY
  renderVideoPlayer: function() {
    let player = new VideoPlayerView({ collection: this.videos, el: '.player' }).render();
  },

  template: templateURL('src/templates/app.html')

});
