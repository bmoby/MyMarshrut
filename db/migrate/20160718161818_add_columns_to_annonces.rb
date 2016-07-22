class AddColumnsToAnnonces < ActiveRecord::Migration
  def change
    add_column :annonces, :villeinter7, :string
    add_column :annonces, :villeinter8, :string
    add_column :annonces, :villeinter9, :string
    add_column :annonces, :villeinter10, :string
  end
end
