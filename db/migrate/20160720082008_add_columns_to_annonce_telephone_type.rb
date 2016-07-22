class AddColumnsToAnnonceTelephoneType < ActiveRecord::Migration
  def change
  	add_column :annonces, :telephones_type, :boolean, default: false
  	add_column :annonces, :telephones_type1, :boolean, default: false
  	add_column :annonces, :telephones_type2, :boolean, default: false
  	add_column :annonces, :telephones_type3, :boolean, default: false
  	add_column :annonces, :telephones_type4, :boolean, default: false
  	add_column :annonces, :telephones_type5, :boolean, default: false
  end
end
