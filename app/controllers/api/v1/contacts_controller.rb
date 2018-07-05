class Api::V1::ContactsController < ApplicationController

    def index
      render json: Contact.all.order(created_at: "DESC")
    end

    def new
        @contact = Contact.new()
    end

    def create
        @contact = Contact.new(contact_params)
        if @contact.save
            render json: @contact, status: :created
        else
            render json: @contact.errors, status: :unprocessable_entity
        end
    end

    # def update
    #     contact = Contact.find(params[:id])
    #     render json: contact
    # end

    # def destroy
    #   contact = Contact.find(params[:id])
    #   contact.destroy
    # end

    private
        def contact_params
            params.
                permit(
                    :name, 
                    :email, 
                    :phone, 
                    :message
                )
        end

end