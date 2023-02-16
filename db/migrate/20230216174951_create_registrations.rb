class CreateRegistrations < ActiveRecord::Migration[6.1]
  def change
    create_table :registrations do |t|
      t.string :first_name
      t.string :last_name
      t.string :address
      t.string :city
      t.string :state
      t.integer :number_of_jumps
      t.integer :tunnel_time
      t.string :previous_camps
      t.string :ratings
      t.string :membership_number
      t.belongs_to :user
      t.belongs_to :event

      t.timestamps
    end
  end
end
