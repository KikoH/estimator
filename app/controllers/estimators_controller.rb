class EstimatorsController < ApplicationController
	def index
		@sizes = Size.all
		@uifeatures = Uifeature.all
	end
end
