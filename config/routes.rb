Rails.application.routes.draw do
  devise_for :users, controllers: {registration: 'users/registrations'}
end
