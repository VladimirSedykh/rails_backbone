
Site.Collections.BaseCollection = Backbone.Collection.extend({

  model: Site.Models.BaseModel,

  url: '/news',

  initialize: function() {
    console.log('site collection init');

    this.bind('change', this.changeTitle);
  },

  parse: function(response) {
    return response.news.map(function(news) {
      return new Site.Models.BaseModel(news);
    });
  },

  changeTitle: function(e) {
    Site.view.renderNews();
  }


});




