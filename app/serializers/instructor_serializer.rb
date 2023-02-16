class InstructorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :about, :image
end
