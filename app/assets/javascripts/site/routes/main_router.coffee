App.Routers.MainRouter = Backbone.Router.extend

  initialize: ->
    console.log 'router init'

    @_initCollections()
    @_initViews()

  routes:
    'rss/index' : 'rssIndex'
    'rss/:id'   : 'rssNode'

  rssIndex: ->
    rss = @rss
    rss.fetch({
      success : ->
    })

  rssNode: (id)->
    @rssFeed.showOne(@rss.get(id).attributes)

  _initCollections: ->
    @rss = new App.Collections.RssCollection()

  _initViews: ->
    @rssFeed = new App.Views.RssView(collection: @rss)

