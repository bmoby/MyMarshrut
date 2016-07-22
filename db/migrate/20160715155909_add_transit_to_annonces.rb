class AddTransitToAnnonces < ActiveRecord::Migration
  def change
    add_column :annonces, :transit, :string, array: true, default: []
  end
end
