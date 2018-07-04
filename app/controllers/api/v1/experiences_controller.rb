class Api::V1::ExperiencesController < ApplicationController

  before_action :set_experience, only: [:duty]

    def index
      render json: Experience.all
    end

    # def show
    #   duties = @experience.job_duties
    #   render json: experience
    # end

    def duty
      duties = @experience.job_duties
      render json: duties
    end

    # def update      
    #   if @experience.update(experience_params)
    #     render json: @experience
    #   else
    #     render json: @experience.errors, status: :unprocessable_entity
    #   end
    # end

    # def destroy
    #   @experience.destroy
    #   if @experience.def destroy
    #     head :no_content, status: :ok
    #   else
    #     render json: @experience.errors, status: :unprocessable_entity
    #   end
    # end


    private

      def set_experience
        @experience = Experience.find(params[:id])
      end
      # def experience_params
      #   params.require(:experience).permit(:job_title, :company, :start_date, :end_date)
      # end
end