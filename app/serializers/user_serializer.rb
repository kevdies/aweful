class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_many :registrations
  has_many :events, through: :registrations
end