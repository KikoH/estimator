class UifeaturesController < ApplicationController
	def new
		@uifeature = Uifeature.new
	end

	def create
		@uifeature = Uifeature.new(uifeature_params)
		if @uifeature.save
			redirect_to features_path
		else
			render 'new'
		end
	end

	def edit
		@uifeature = Uifeature.find(params[:id])
	end

	def update
		@uifeature =  Uifeature.find(params[:id])
		@uifeature.update_attributes(uifeature_params)
		redirect_to features_path
	end

	private
	def uifeature_params
		params.require(:uifeature).permit(:title, :description, :price, :image, :developer_days, :designer_days, :name)
	end
end
