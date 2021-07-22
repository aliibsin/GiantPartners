class ChartDataController < ApplicationController

  def index 
    @chartData = ChartDatum.all
    render :index
  end


end
