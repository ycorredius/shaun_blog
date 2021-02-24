class UserController < ApplicationController
	before_action :set_user, only: [:show,:update]

	# def new
	# 	@user 
	# end
	def create 
		if @user = User.create!(user_params)
			binding.pry
		end
	end
	def show

	end

	def update

	end

	private

	def user_params
		params.require(:user).permit(:username, :email,:password,:password_confirmation)
	end
end
