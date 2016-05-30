class RemoveImageFromAnnonce < ActiveRecord::Migration
  def change
    remove_column :annonces, :image, :string
  end
end
