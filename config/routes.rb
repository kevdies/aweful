Rails.application.routes.draw do

  resources :users, only: [:create, :show, :index]
  resources :registrations, only: [:index, :create, :show, :update, :destroy]
  resources :events, only: [:index, :create, :show, :update, :destroy]
  resources :instructors, only: [:index, :create, :show, :update, :destroy]

  #user events
  get '/users/:id/events', to: 'users#get_events'

    #User/session Routes
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'sessions#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end