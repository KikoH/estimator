class SocialsController < ApplicationController
	def new
		@social = Social.new
	end

	def create
		@social = Social.new(social_params)
		if @social.save
			redirect_to features_path
		else
			render 'new'
		end
	end

	def edit
		@social = Social.find(params[:id])
	end

	def update
		@social =  Social.find(params[:id])
		@social.update_attributes(social_params)
		redirect_to home_path
	end

	private
	def social_params
		params.require(:social).permit(:title, :description, :price, :image, :developer_days, :designer_days, :name)
	end
end
