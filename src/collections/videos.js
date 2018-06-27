var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',
  // initialize the movies collection
  initialize: function() {
  
  },

  // render method for Videos collection
  render: function() {
    console.log(window.exampleVideoData);
  },

  parse: function(obj) {
    return obj.items;
  },

  search: function(data) {
    this.fetch({
      type: 'GET',   
      data: {
        q: data,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true
      },
      success: function(response) {
        console.log('Successful fetch');
        console.log(response);
        // video.select(response.models[0]);
      },
      error: function() {
        console.log('Failed to fetch!');
      }

    });
  }
});
