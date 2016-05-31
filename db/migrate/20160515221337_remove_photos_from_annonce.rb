class RemovePhotosFromAnnonce < ActiveRecord::Migration
  def change
    remove_column :annonces, :photos_vehicule, :text
  end
end
