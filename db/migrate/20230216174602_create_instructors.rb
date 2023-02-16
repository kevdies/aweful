class CreateInstructors < ActiveRecord::Migration[6.1]
  def change
    create_table :instructors do |t|
      t.string :first_name
      t.string :last_name
      t.string :about
      t.string :image

      t.timestamps
    end
  end
end
