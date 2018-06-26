var VideoListEntryView = Backbone.View.extend({

  template: templateURL('src/templates/videoListEntry.html'),
 
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
    console.log(this);
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));

    // posible solution to the click handler problem
    this.$el.find('video-list-entry-title').on('click', this.handleClick.bind(this));
    return this.$el;
    
  },

  //FIXME: handleClick running 5 times for each click!
  handleClick: function() {
    console.log('you are clicking videoListEntry'); 
    this.model.select();
  }
});
