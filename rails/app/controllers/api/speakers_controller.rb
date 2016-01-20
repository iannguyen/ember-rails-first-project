class Api::SpeakersController < ApplicationController
  def index
    render json: Speaker.includes(:presentations).all
  end

  def show
    render json: Speaker.includes(:presentations).find(params[:id])
  end

end
