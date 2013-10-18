class RssesController < ApplicationController

  def show
    @data = Hash.from_xml(Net::HTTP.get('news.yahoo.com', '/rss/')).to_json

    render :json => @data
  end

end