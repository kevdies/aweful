class Registration < ApplicationRecord
    belongs_to :user
    belongs_to :event

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :address, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :number_of_jumps, presence: true
    validates :tunnel_time, presence: true
    validates :previous_camps, presence: true
    validates :ratings, presence: true
    validates :membership_number, presence: true

end