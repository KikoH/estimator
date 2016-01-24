class ChangeNameOfUgcontent < ActiveRecord::Migration
  def change
  	change_column :ugcontents, :name, :string, :default => "ugcontent"
  end
end
