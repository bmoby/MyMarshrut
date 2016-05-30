class AddPhotoIdToAnnonce < ActiveRecord::Migration
  def change
    add_column :annonces, :photo_id, :string
  end
end
