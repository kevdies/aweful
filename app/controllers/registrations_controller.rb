class RegistrationsController < ApplicationController

    def index
        registrations = Registration.all
        render json: registrations
    end

    def show
        reg = find_registration
        render json: reg
    end

    def create
        reg = Registration.create!(registration_params)
        render json: reg, status: :created
    end

    def update
        reg = find_registration
        reg.update!(registration_params)
        render json: reg
    end

    def destroy
        reg = find_registration
        reg.destroy
        head :no_content
    end

    private

    def find_registration
        Registration.find(params[:id])
    end

    def registration_params
        params.permit(:first_name, :last_name, :address, :city, :state, :number_of_jumps, :tunnel_time, :previous_camps, :ratings, :membership_number, :user_id, :event_id)
    end


end
