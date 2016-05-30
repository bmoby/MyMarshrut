class RemovePhotosVehiculeFromAnnonce < ActiveRecord::Migration
  def change
    remove_column :annonces, :photos_vehicule, :text
    remove_column :users, :pol, :string
    remove_column :users, :photo, :text
  end
end
