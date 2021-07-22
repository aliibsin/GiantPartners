class CreateChartData < ActiveRecord::Migration[5.2]
  def change
    create_table :chart_data do |t|
      t.string :fname
      t.string :mname
      t.string :lname
      t.string :prefix
      t.string :address1
      t.string :address2
      t.string :city
      t.string :state
      t.string :zip
      t.string :education
      t.string :income

      t.timestamps
    end
  end
end
