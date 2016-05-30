class RemovePhotoVehiculeFromAnnonces < ActiveRecord::Migration
  def change
    remove_column :annonces, :photo_vehicule, :string
    add_column :annonces, :image, :string
  end
end
