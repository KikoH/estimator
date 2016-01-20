class SizesController < ApplicationController
	def new
		@size = Size.new
	end

	def create
		@size = Size.new(size_params)
		if @size.save
			redirect_to sizes_path
		else
			render 'new'
		end
	end

	def edit
		@size =  Size.find(params[:id])
	end

	def update
		@size =  Size.find(params[:id])
		@size.update_attributes(size_params)
		redirect_to sizes_path
	end

	def destroy
		@size = Size.find(params[:id])
		@feture.destroy
		redirect_to sizes_path
	end

	private
	def size_params
		params.require(:size).permit(:title, :description, :price, :image, :developer_days, :designer_days, :name)
	end
end
