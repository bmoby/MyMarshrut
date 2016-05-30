class RemoveColumnPhotoIdFromAnnonce < ActiveRecord::Migration
  def change
    remove_column :annonces, :photo_id, :string
  end
end
