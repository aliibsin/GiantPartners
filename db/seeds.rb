# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'csv'

CSV.foreach(Rails.root.join('./csv/coding-challenge.csv'), headers: true) do |row|
  Word.create( {
    fname: row["FIRST NAME"]
    mname: row["MIDDLE INITIAL"]
    lname: row["LAST NAME"]
    prefix: row["PREFIX"]
    address1: row["ADDRESS 1"]
    address2: row["ADDRESS 2"]
    city: row["CITY"]
    state: row["STATE"]
    zip: row["ZIP CODE"]
    education: row["EDUCATION"]
    income: row["ESTIMATED INCOME"]
  } ) 
end