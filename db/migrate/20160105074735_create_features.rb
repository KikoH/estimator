class CreateFeatures < ActiveRecord::Migration
  def change
    create_table :features do |t|
    	t.string :title, :null => false
    	t.string :description
    	t.integer :price, :null => false
      	t.timestamps null: false
    end
  end
end
