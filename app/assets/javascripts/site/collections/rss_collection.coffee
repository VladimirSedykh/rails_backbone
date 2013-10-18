App.Collections.RssCollection = Backbone.Collection.extend

  model: App.Models.RssModel

  url: 'rsses'

  initialize: ->
    console.log 'rss collection init'

  parse: (response) ->
    @rssInfoModel = new App.Models.RssInfoModel(response.rss.channel)
    new App.Views.RssInfoView(model: @rssInfoModel, collection: @)

    _.map(response.rss.channel.item, (rss, id)->
      rss['id'] = id+1
      new App.Models.RssModel(rss)
    )
