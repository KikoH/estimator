class DropFeaturesFromDatabase < ActiveRecord::Migration
  def change
  	drop_table :features
  end
end
