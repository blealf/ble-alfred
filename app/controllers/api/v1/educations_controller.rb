class Api::V1::EducationsController < ApplicationController

    def index
      render json: Education.all.order(:rank)
    end
    
end