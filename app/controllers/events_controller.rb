class EventsController < ApplicationController

    def index
        events = Event.all.order(:date)
        render json: events, status: :ok
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    def show
        event = find_event
        render json: event, status: :ok
    end

    def update
        event = find_event
        event.update!(event_params)
        render json: event, status: :accepted
    end

    def destroy
        event = find_event
        event.destroy
        head :no_content
    end

    private

    def find_event
        Event.find(params[:id])
    end

    def event_params
        params.permit(:name, :description, :location, :date, :price, :image)
    end

end