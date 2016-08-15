class EditChayWifiAnnonces < ActiveRecord::Migration
  def change
  	change_column :annonces, :chay, :boolean, default: false
  	change_column :annonces, :wifi, :boolean, default: false
  end
end
