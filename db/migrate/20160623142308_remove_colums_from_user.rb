class RemoveColumsFromUser < ActiveRecord::Migration
  def up
    remove_column :users, :verifiednumber
    remove_column :users, :is_verified
    remove_column :users, :verification_code
    remove_column :users, :nom
    remove_column :users, :date_naissance
    remove_column :users, :pays
    drop_table :villes
    drop_table :villes_suggestions
  end
  def down
    add_column :users, :verifiednumber, :string
    add_column :users, :is_verified, :boolean
    add_column :users, :verification_code, :string
    add_column :users, :nom, :string
    add_column :users, :date_naissance, :date
    add_column :users, :pays, :string
  end
end
