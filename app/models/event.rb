class Event < ApplicationRecord
    has_many :registrations, dependent: :destroy
    has_many :users, through: :registrations

    validates :name, presence: true
    validates :description, presence: true
    validates :location, presence: true
    validates :date, presence: true
    validates :price, presence: true
    validates :image, presence: true

end
