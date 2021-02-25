Rails.application.routes.draw do
	resource :user, only: [:show]
	post '/user', to: 'user#create'
end
