class CreateAnalytics < ActiveRecord::Migration
	def change
		create_table :analytics do |t|
			t.string :title, :null => false
			t.string :description
			t.string :image
			t.string :name, :default => "analytics"
			t.integer :price, :null => false
			t.integer :developer_days
			t.integer :designer_days
			t.timestamps null: false
		end
	end
end
