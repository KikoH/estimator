class AnalyticsController < ApplicationController
	def new
        @analytic = Analytic.new
    end

    def create
        @analytic = Analytic.new(analytic_params)
        if @analytic.save
            redirect_to features_path
        else
            render 'new'
        end
    end

    def edit
        @analytic = Analytic.find(params[:id])
    end

    def update
        @analytic =  Analytic.find(params[:id])
        @analytic.update_attributes(analytic_params)
        redirect_to home_path
    end

    private
    def analytic_params
        params.require(:analytic).permit(:title, :description, :price, :image, :developer_days, :designer_days, :name)
    end
end
