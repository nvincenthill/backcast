var VideoListEntryView = Backbone.View.extend({

  el: '.video-list',

  template: templateURL('src/templates/videoListEntry.html'),
  
  initialize: function() {
    console.log('Initializing VideoListEntryView');
    this.render();
  },

  render: function() {
    console.log('Rendering VideoListEntryView');
    this.$el.html(this.template());
    return this;
  },



});
