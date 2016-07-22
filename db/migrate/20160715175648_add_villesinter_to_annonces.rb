class AddVillesinterToAnnonces < ActiveRecord::Migration
  def change
    add_column :annonces, :villeinter1, :string
    add_column :annonces, :villeinter2, :string
    add_column :annonces, :villeinter3, :string
    add_column :annonces, :villeinter4, :string
    add_column :annonces, :villeinter5, :string
    add_column :annonces, :villeinter6, :string
  end
end
