class NewsController < ApplicationController

  def show

    render :json => {
      :news => [{'title' => '123', 'text' => 'text1'}, {'title' => '456', 'text' => 'text1'}, {'title' => '789', 'text' => 'text1'}]
    }.to_json

  end

end
