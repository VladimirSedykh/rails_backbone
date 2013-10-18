App.Views.RssView = Backbone.View.extend

  template: _.template($('#rssTemplate').html())
  templateNode: _.template($('#rssTemplateNode').html())

  el: '#rss-feed'

  initialize: ->
    console.log 'rss view init'

    @collection.on "add", @addOne, this
    @collection.on "reset", @render, this

  render: ()->
    $('#js-rss-list').hide()
    _this = @
    $(@$el).html('') # clear container before render data

    _.map @collection.models, (rss)->
      _this.addOne(rss.attributes)

  addOne: (rssData)->
    $(@$el).append(@template({rssData}))

  showOne: (rssData)->
    $(@$el).html(@template({rssData}))

  showNode: (rssData)->
    $('#js-rss-list').fadeIn()
    $(@$el).html(@templateNode({rssData}))


