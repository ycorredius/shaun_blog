class UsersController < ApplicationController
	def create
		@user = User.new(user_params)
		if @user.valid? && @user.save
			render json: UserSerializer.new(@user).serialized_json
		else 
			render json: @user.errors, status: 400
		end
	end

	protected

	def user_params
		params.require(:user).permit(:user_name,:email,:password_digest,:password_confirmation)
	end
end
