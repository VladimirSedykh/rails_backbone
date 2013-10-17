class RssesController < ApplicationController

  def show
    @data = Net::HTTP.get('news.yahoo.com', '/rss/')

    render :xml => @data
  end

end