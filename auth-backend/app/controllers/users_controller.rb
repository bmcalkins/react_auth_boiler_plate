class UsersController < ApplicationController
    def create
        @user = User.create(user_params)

        render json: @user, status: :created  
    end 

    def login
        @user = User.find_by(username: params[:user][:username])

        if @user && @user.authenticate(params[:user][:password])
            @token = JWT.encode({user_id: @user.id}, Rails.application.secrets.secret_key_base[0])

            render json: {user: @user, token: @token} 
        else
            render json: {error: "Invalid Crednetials"}, status: :unauthorized 
        end 
    end 

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :username, :password)
    end 
end
