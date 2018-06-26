var Video = Backbone.Model.extend({

  initialize: function(video) {
    // console.log(video);
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    console.log('this is the model select function');
    this.trigger('select', this);
    // call re-render on video player view
  }

});
