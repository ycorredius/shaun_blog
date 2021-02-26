class SessionsController < ApplicationController
    def create
        @user = User.find_by(email: session_params[:email])
        if @user && @user.authenticate(session_params[:password])
            login!
            render json: {
                loggged_in: true,
                user: @user
            }
        else
            render json: {
                status: 401,
                errors: ['no such user', 'verify credentials and try agian or signup']
            }
        end
    end

    private 

    def session_params
        params.require(:credentials).permit(:email,:password)
    end
end
