Site.Collections.RssesCollection = Backbone.Collection.extend({

  model: Site.Models.RssesModel,

  url: '/rsses',

  initialize: function() {
    console.log('rsses collection init');
//    this.getRssData();
  },

  parse: function(response) {
    console.log(response);
    return response.item.map(function(rss) {
      console.log(Site.rsses);
      return new Site.Models.RssesModel({asd : 'asd'});
    });
  },

  render: function() {

  },

  getRssData: function() {
    $.ajax({
      type: "GET",
      url: "/rsses",
      dataType: "xml",
      success: function (data) {
        Site.rsses.parse(xmlToJson(data).rss.channel);
      }
    });
  }

});