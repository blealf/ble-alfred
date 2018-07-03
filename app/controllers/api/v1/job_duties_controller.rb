class Api::V1::JobDutiesController < ApplicationController

    def index
        render json: JobDuty.all
        # render json: JobDuty.find(params[:experience_id]).all
        # render json: JobDuty.where(experience_id: 1).find_each
    end

    def specific
        render json: JobDuty.where(experience_id: 1).find_each
    end
end