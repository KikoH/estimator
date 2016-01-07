class CreateUifeatures < ActiveRecord::Migration
	def change
		create_table :uifeatures do |t|
			t.string :title, :null => false
			t.string :description
			t.string :image
			t.integer :price, :null => false
			t.timestamps null: false
		end
	end
end
