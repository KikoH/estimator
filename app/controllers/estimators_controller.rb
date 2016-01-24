class EstimatorsController < ApplicationController
	def index
		@sizes = Size.all
		@uifeatures = Uifeature.all
		@accounts = Account.all
		@ugcontents = Ugcontent.all
		@locations = Location.all
		@socials = Social.all
		@billings = Billing.all
		@analytics = Analytic.all
		@integrations = Integration.all
		@securities = Security.all
	end
end
