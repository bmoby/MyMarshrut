class RemoveImageColumnsFromAnnonce < ActiveRecord::Migration
  def change
    remove_attachment :annonces, :image
    remove_attachment :annonces, :photo
  end
end
