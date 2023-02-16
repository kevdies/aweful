class User < ApplicationRecord
    has_secure_password
    has_many :registrations, dependent: :destroy
    has_many :events, through: :registrations


      validates :password_digest, :email, presence: true
      validates :email, uniqueness: { message: 'Account already exists'}
end
