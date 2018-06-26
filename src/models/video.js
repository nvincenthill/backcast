var Video = Backbone.Model.extend({

  initialize: function(video) {
    this.set('id', video.id.videoId);
  },

  select: function() {
    console.log('this is the model select function');
    this.trigger('select', this);
  }

});
