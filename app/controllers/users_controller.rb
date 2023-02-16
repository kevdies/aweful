class UsersController < ApplicationController

    def get_events
        user = User.find(params[:id])
        events = user.events.order(:date)
        render json: events, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def index
        render json: User.all
    end

    private

    def user_params
        params.permit(:email, :password, :password_confirmation)
    end
end
