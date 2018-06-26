var VideoListEntryView = Backbone.View.extend({

  el: '.video-list',

  template: templateURL('src/templates/videoListEntry.html'),

  initialize: function() {

  },

  render: function() {
    console.log('>>>>>before', this.$el);
    this.$el.append(this.template(this.model.attributes));
    console.log('>>>>>after', this.$el);
    return this.$el;
  },



});
