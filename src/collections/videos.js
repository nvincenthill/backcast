var Videos = Backbone.Collection.extend({

  model: Video,

  // initialize the movies collection
  initialize: function() {
  
  },

  // render method for Videos collection
  render: function() {
    console.log(window.exampleVideoData);
  },
});
