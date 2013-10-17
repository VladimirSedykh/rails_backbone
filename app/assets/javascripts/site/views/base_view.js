Site.Views.BaseView = Backbone.View.extend({

  template: _.template($("#newsTemplate").html()),

  model: Site.Models.BaseModel,

  events: {
    'click #btn' : 'changeTitle'
  },

  el: '#right',

  initialize: function() {
    console.log('view init');
  },

  renderNews: function() {
    var obj = Site.news.models;
    $(this.el).html(this.template(obj));
  },

  changeTitle: function() {
    Site.news.models[0].set({title : 'asd asd asd'});
  }

});






