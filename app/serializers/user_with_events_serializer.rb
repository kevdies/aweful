class UserWithEventsSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_many :registrations
  has_many :events, through: :registrations dependent: :destroy
end
