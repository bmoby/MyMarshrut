class AddPhotoVehiculeToAnnonces < ActiveRecord::Migration
  def change
    add_column :annonces, :photo_vehicule, :string
  end
end
