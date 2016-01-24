class EstimatorsController < ApplicationController
	def index
		@sizes = Size.all
		@uifeatures = Uifeature.all
		@accounts = Account.all
		@ugcontents = Ugcontent.all
		@locations = Location.all
	end
end
