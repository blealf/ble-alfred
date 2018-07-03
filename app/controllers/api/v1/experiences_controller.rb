class Api::V1::ExperiencesController < ApplicationController

    def index
      render json: Experience.all
    end

    def show
      experience = Experience.find(params[:id])
      duties = experience.job_duties
      render json: experience
    end

    def duty
      experience = Experience.find(params[:id])
      duties = experience.job_duties
      render json: duties
    end
end