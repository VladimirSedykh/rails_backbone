App.Collections.RssCollection = Backbone.Collection.extend

  model: App.Models.RssModel

  url: 'rsses'

  initialize: ->
    console.log 'rss collection init'

  parse: (response) ->
    _.map(response.rss.channel.item, (rss, id)->
      rss['id'] = id
      new App.Models.RssModel(rss)
    )
