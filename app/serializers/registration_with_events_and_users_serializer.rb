class RegistrationWithEventsAndUsersSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :address, :city, :state, :number_of_jumps, :tunnel_time, :previous_camps, :ratings, :membership_number
  belongs_to :user
  belongs_to :event
end
