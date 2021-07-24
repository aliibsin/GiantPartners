class ChartDataController < ApplicationController

  def index 
    render :index
  end


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
