Site.Routes.BaseRouter = Backbone.Router.extend({

  initialize: function() {
    console.log('router init')
  },

  routes: {
    "":       "main",
    "main":   "main",
    "news":   "news",
    "about":  "about",
    "rss":    "rssIndex",
    "rss/:id":"rssShow"
  },

  main: function() {
    console.log('redirect to main page');
  },

  news: function() {
    console.log('redirect to news page');
    Site.view = new Site.Views.BaseView();
    Site.view.renderNews();
  },

  about: function() {
    console.log('redirect to about page');
  },

  rssIndex: function() {

  },

  rssShow: function(id) {
     console.log('id: ', id);
  }

});


$(document).ready(function() {

  Site.news = new Site.Collections.BaseCollection();
  Site.news.fetch({
    success: function(e) {
      router = new Site.Routes.BaseRouter();
      Backbone.history.start();
    }
  });
  Site.rsses = new Site.Collections.RssesCollection();
  Site.news.fetch();

  Site.rssesView = new Site.Views.RssesView();



});


