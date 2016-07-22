class ChangeColumnsTelephoneType < ActiveRecord::Migration
  def change
  	add_column :annonces, :telephone_type, :boolean, default: true
  	add_column :annonces, :telephone_type1, :boolean, default: true
  	add_column :annonces, :telephone_type2, :boolean, default: true
  	add_column :annonces, :telephone_type3, :boolean, default: true
  	add_column :annonces, :telephone_type4, :boolean, default: true
  	add_column :annonces, :telephone_type5, :boolean, default: true
  end
end
