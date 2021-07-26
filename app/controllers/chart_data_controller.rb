class ChartDataController < ApplicationController
  # for view
  def index 
    render :index
  end

  # custom route to pull columns from database and alters format to match chartkick input
  def fetchInfo
    type = params[:type]

    values = ChartDatum.pluck("#{type}")
    hashValues = {}

    values.each do |value|
      hashValues[value] ? hashValues[value] += 1 : hashValues[value] = 1
    end

    render json: hashValues

  end

end
