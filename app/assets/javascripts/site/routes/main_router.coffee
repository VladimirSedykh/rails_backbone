App.Routers.MainRouter = Backbone.Router.extend

  initialize: ->
    console.log 'router init'

    @_initCollections()
    @_initViews()

  routes:
    'rss/index' : 'rssIndex'
    'rss/:id'   : 'rssNode'

  _initCollections: ->
    @rss = new App.Collections.RssCollection()

  _initViews: ->
    @rssFeed = new App.Views.RssView(collection: @rss)

  rssIndex: ->
    if @rss.length > 0
      @rssFeed.render(@rss)
    else
      @rss.fetch()

  rssNode: (id)->
    if @rss.length > 0
      @rssFeed.showNode(@rss.get(id).attributes)
    else
      @.navigate("/rss/index", true)

