Rails.application.routes.draw do
  # api endpoints
  namespace :api do
    resources :todos

    #other routes will go here
  end
end
