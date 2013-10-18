App.Views.RssInfoView = Backbone.View.extend

  template: _.template($('#rssInfoTemplate').html())

  el: '#rss-info'

  initialize: ->
    @render()

  render: ->
    rssInfo = @model.attributes
    $(@$el).html(@template({rssInfo}))