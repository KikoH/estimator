class AddNameDeveloperDesignerDaysColumns < ActiveRecord::Migration
  def change
  	add_column :features, :name, :string, :default => "big"
  	add_column :features, :developer_days, :integer
  	add_column :features, :designer_days, :integer

  	add_column :uifeatures, :name, :string, :default => "uilevel"
  	add_column :uifeatures, :developer_days, :integer
  	add_column :uifeatures, :designer_days, :integer
  end
end
