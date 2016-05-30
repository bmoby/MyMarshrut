class RemovePhotosFromAnnonce < ActiveRecord::Migration
  def change
    remove_column :annonces, :photos, :string
  end
end
