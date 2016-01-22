class AccountsController < ApplicationController
	def new
		@account = Account.new
	end

	def create
		@account = Account.new(account_params)
		if @account.save
			redirect_to accounts_path
		else
			render 'new'
		end
	end

	def edit
		@account =  Account.find(params[:id])
	end

	def update
		@account =  Account.find(params[:id])
		@account.update_attributes(account_params)
		redirect_to accounts_path
	end

	def destroy
		@account = Account.find(params[:id])
		@account.destroy
		redirect_to accounts_path
	end

	private
	def account_params
		params.require(:account).permit(:title, :description, :price, :image, :developer_days, :designer_days, :name)
	end
end
