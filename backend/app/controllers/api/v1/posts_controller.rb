module Api
  module V1
    class PostsController < ApplicationController
      protect_from_forgery 
     
      

      def index
        user = current_api_v1_user
        posts = user.posts
        render json: posts
      end

      def create
        post = Post.new(post_params)
        if post.save
          render json: post, status: :created
        else
          render json: post.errors, status: :unprocessable_entity
        end
      end

      private 

        def post_params
          params.require(:post).permit(:title, :content).merge(user_id: current_api_v1_user.id)
        end

    
    end
  end
end