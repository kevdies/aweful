class RegistrationSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :address, :city, :state, :number_of_jumps, :tunnel_time, :previous_camps, :ratings, :membership_number, :user_id, :event_id
  belongs_to :event
  belongs_to :user
end
