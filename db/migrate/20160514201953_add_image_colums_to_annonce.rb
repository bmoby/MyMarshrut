class AddImageColumsToAnnonce < ActiveRecord::Migration
  def up
    add_attachment :annonces, :image
  end

  def down
    remove_attachment :annonces, :image
  end
end
