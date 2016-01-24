class LocationsController < ApplicationController
	def new
		@location = Location.new
	end

	def create
		@location = Location.new(location_params)
		if @location.save
			redirect_to features_path
		else
			render 'new'
		end
	end

	def edit
		@location = Location.find(params[:id])
	end

	def update
		@location =  Location.find(params[:id])
		@location.update_attributes(location_params)
		redirect_to home_path
	end

	private
	def location_params
		params.require(:location).permit(:title, :description, :price, :image, :developer_days, :designer_days, :name)
	end
end
