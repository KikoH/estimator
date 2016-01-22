class AddMissingToAccounts < ActiveRecord::Migration
  def change
  	add_column :accounts, :name, :string, :default => "account"
  	add_column :accounts, :developer_days, :integer
  	add_column :accounts, :designer_days, :integer
  	add_column :accounts, :price, :integer
  	add_column :accounts, :title, :string
  	add_column :accounts, :image, :string
  	add_column :accounts, :description, :string
  end
end
