class AddWifiandchayToAnnonces < ActiveRecord::Migration
  def change
  	add_column :annonces, :wifi, :boolean
  	add_column :annonces, :chay, :boolean
  end
end
