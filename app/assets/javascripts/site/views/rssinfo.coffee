App.Views.RssInfoView = Backbone.View.extend

  template: _.template($('#rssInfoTemplate').html())

  el: '#rss-info'

  events:
    'click #js-refresh-rss': 'refreshRss'

  initialize: ->
    @render()

  render: ->
    rssInfo = @model.attributes
    $(@$el).html(@template({rssInfo}))

  refreshRss: ->
    @collection.reset().fetch()