var VideoListEntryView = Backbone.View.extend({

  template: templateURL('src/templates/videoListEntry.html'),
 
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    this.$el.find('.video-list-entry-title').on('click', this.handleClick.bind(this));
    return this.$el;

  },

  handleClick: function() {
    this.model.select();
  }
});
