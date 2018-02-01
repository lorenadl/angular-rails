# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# create_table "freelance_documents", force: :cascade do |t|
#   t.string "title"
#   t.string "description"
#   t.text "file_url"
#   t.text "image_url"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end

10.times do |d|
  FreelanceDocument.create!(
    title: "Document #{d}",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida dolor quis massa sodales, vitae tincidunt enim rhoncus. Aenean vitae nulla vitae augue commodo facilisis sed id mi. Phasellus quis ornare nisl. Morbi eget libero maximus, laoreet lorem et, efficitur tortor. Pellentesque est nisi, semper eu sagittis a, rhoncus non dolor. Aenean vitae posuere orci, a rhoncus enim. Etiam posuere ut eros ut hendrerit. Donec imperdiet urna eu fermentum condimentum. Vestibulum ullamcorper ut ex vel facilisis. Proin ut hendrerit nunc. Vestibulum dolor massa, eleifend eu dui non, bibendum ullamcorper ante. Praesent quis eleifend nibh, quis fringilla lectus.",
    file_url: "http://www.google.it",
    image_url: 'http://www.jamiemillerrecruitment.com/wp-content/uploads/2016/11/2016-11-09-1478692893-6107940-FreelanceEntrepreneur.jpeg'
  )
end
