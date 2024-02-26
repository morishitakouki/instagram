module Api
  module V1
    class PostsController < ApplicationController
      protect_from_forgery 
      

      def index
        posts = Post.all
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
        params.require(:post).permit(:title, :content)
      end
    end
  end
end