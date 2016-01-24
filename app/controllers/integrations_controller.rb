class IntegrationsController < ApplicationController
	def new
        @integration = Integration.new
    end

    def create
        @integration = Integration.new(integration_params)
        if @integration.save
            redirect_to features_path
        else
            render 'new'
        end
    end

    def edit
        @integration = Integration.find(params[:id])
    end

    def update
        @integration =  Integration.find(params[:id])
        @integration.update_attributes(integration_params)
        redirect_to home_path
    end

    private
    def integration_params
        params.require(:integration).permit(:title, :description, :price, :image, :developer_days, :designer_days, :name)
    end
end
