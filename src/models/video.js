var Video = Backbone.Model.extend({

  initialize: function(video) {
    console.log(video);
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  }

});
