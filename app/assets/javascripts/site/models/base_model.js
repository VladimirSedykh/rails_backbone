
Site.Models.BaseModel = Backbone.Model.extend({

  initialize: function() {
    console.log('site model init');


    this.bind('change:title', this.changeTitle);
  }


});

