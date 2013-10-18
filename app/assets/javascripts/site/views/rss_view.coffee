App.Views.RssView = Backbone.View.extend

  template: _.template($('#rssTemplate').html())

  el: '#rss-feed'

  initialize: ->
    console.log 'rss view init'

    @collection.on "add", @addOne, this
    @collection.on "reset", @render, this

  render: ->
    _this = @


    _.map @collection.models, (rss)->
      _this.addOne(rss)

  addOne: (rss)->
    console.log 'render rss view'

    rssData = rss.attributes
    $(@$el).append(@template({rssData}))


  showOne: (rssNode)->
    $(@$el).html(@template({rssNode}))


