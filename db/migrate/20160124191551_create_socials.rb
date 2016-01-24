class CreateSocials < ActiveRecord::Migration
	def change
		create_table :socials do |t|
			t.string :title, :null => false
			t.string :description
			t.string :image
			t.string :name, :default => "social"
			t.integer :price, :null => false
			t.integer :developer_days
			t.integer :designer_days
			t.timestamps null: false
		end
	end
end
