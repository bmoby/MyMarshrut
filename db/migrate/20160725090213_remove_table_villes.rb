class RemoveTableVilles < ActiveRecord::Migration
  def change
  	drop_table :villes
  end
end
