class CreateIntegrations < ActiveRecord::Migration
	def change
		create_table :integrations do |t|
			t.string :title, :null => false
			t.string :description
			t.string :image
			t.string :name, :default => "integration"
			t.integer :price, :null => false
			t.integer :developer_days
			t.integer :designer_days
			t.timestamps null: false
		end
	end
end
