class AddTwoImagesToAnnonce < ActiveRecord::Migration
  def change
  	add_column :annonces, :image2_uid, :string
  	add_column :annonces, :image2_name, :string
  	add_column :annonces, :image3_uid, :string
  	add_column :annonces, :image3_name, :string
  end
end
