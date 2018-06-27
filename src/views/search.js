var SearchView = Backbone.View.extend({
  
  initialize: function() {
    // set click event listener
    // $('.btn').on('click', () => {
    //   let userInput = this.$('.form-control').val();
    //   console.log(userInput);
    //   this.handleSearch(userInput);
    // });

    // set enter key pressed event listener
  },

  events: {
    'click button': 'handleSearch',
    'keyup': 'keyAction',
  },

  handleSearch: function(data) {
    var $searchData = $('.form-control');
    this.collection.search($searchData.val());
    $searchData.val('');
  },

  keyAction: function(e) {
    var code = e.keyCode || e.which;
    if (code === 13) { 
      this.handleSearch();
    }
  },

  render: function() {
    this.$el.html(this.template());

    return this;
  },

  template: templateURL('src/templates/search.html')

});
