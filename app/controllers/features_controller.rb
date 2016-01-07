class FeaturesController < ApplicationController
	def index
		@features = Feature.all
	end

	def new
		@feature = Feature.new
	end

	def create
		@feature = Feature.new(feature_params)
		if @feature.save
			redirect_to features_path
		else
			render 'new'
		end
	end

	def edit
		@feature =  Feature.find(params[:id])
	end

	def update
		@feature =  Feature.find(params[:id])
		@feature.update_attributes(feature_params)
		redirect_to features_path
	end

	def destroy
		@feature = Feature.find(params[:id])
		@feture.destroy
		redirect_to features_path
	end

	private
	def feature_params
		params.require(:feature).permit(:title, :description, :price)
	end
end
