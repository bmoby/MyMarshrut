class AddColumsToAnnonce < ActiveRecord::Migration
  def change
    add_column :annonces, :image_uid, :string
    add_column :annonces, :image_name, :string
  end
end
