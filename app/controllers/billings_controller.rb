class BillingsController < ApplicationController
	def new
        @billing = Billing.new
    end

    def create
        @billing = Billing.new(billing_params)
        if @billing.save
            redirect_to features_path
        else
            render 'new'
        end
    end

    def edit
        @billing = Billing.find(params[:id])
    end

    def update
        @billing =  Billing.find(params[:id])
        @billing.update_attributes(billing_params)
        redirect_to home_path
    end

    private
    def billing_params
        params.require(:billing).permit(:title, :description, :price, :image, :developer_days, :designer_days, :name)
    end
end
