class AddPhotosToAnnonce < ActiveRecord::Migration
  def change
    add_column :annonces, :photos, :string
  end
end
