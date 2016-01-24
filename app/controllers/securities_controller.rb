class SecuritiesController < ApplicationController
	def new
        @securities = Security.new
    end

    def create
        @securities = Security.new(securities_params)
        if @securities.save
            redirect_to features_path
        else
            render 'new'
        end
    end

    def edit
        @securities = Security.find(params[:id])
    end

    def update
        @securities =  Security.find(params[:id])
        @securities.update_attributes(securities_params)
        redirect_to home_path
    end

    private
    def securities_params
        params.require(:securities).permit(:title, :description, :price, :image, :developer_days, :designer_days, :name)
    end
end
