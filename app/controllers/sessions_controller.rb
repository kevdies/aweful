class SessionsController < ApplicationController

    #GET /me
     def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    # POST /Login
    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: ['Invalid email or password'] }, status: :unauthorized
        end
    end

    # DELETE /Logout
    def destroy
        session.delete :user_id
        head :no_content
    end
end