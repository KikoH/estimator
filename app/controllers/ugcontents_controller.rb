class UgcontentsController < ApplicationController
	def new
		@ugcontent = Ugcontent.new
	end

	def create
		@ugcontent = UgContent.new(ugcontent_params)
		if @ugcontent.save
			redirect_to features_path
		else
			render 'new'
		end
	end

	def edit
		@ugcontent = UgContent.find(params[:id])
	end

	def update
		@ugcontent =  UgContent.find(params[:id])
		@ugcontent.update_attributes(ugcontent_params)
		redirect_to home_path
	end

	private
	def ugcontent_params
		params.require(:ugcontent).permit(:title, :description, :price, :image, :developer_days, :designer_days, :name)
	end
end
