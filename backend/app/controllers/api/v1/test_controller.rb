class Api::V1::TestController < ApplicationController
  def index
    render json: { message: "Hello World! hehe"}
  end
end
