module ChartDataHelper

  def getFname
    # @allFname = ChartDatum.pluck(:fname);
    # @allFname = ChartDatum.select([:fname, ChartDatum.arel_table[:fname].count.as('num')]).pluck(:fname)
    @allFname = ChartDatum.pluck(:fname, ChartDatum.arel_table[:fname].count.as('num')).group(:fname)
  end


  def getChartValues(type)
    values = ChartDatum.pluck("#{type}")
    hashValues = {}

    values.each do |value|
      hashValues[value] ? hashValues[value] += 1 : hashValues[value] = 1
    end

    return hashValues
  end

end
