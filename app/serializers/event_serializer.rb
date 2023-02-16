class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :date, :price, :image
  has_many :registrations
end
