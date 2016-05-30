class AddDetailsToUser < ActiveRecord::Migration
  def up
    add_column :users, :pol, :string
    add_column :users, :nom, :string
    add_column :users, :prenom, :string
    add_column :users, :date_naissance, :date
    add_column :users, :pays, :string
    add_column :users, :ville, :string
    add_column :users, :telephone_personnel, :string
    add_column :users, :photo, :text
    add_column :users, :chofer, :boolean, default: false
  end
  def down
    remove_column :users, :pol
    remove_column :users, :nom
    remove_column :users, :prenom
    remove_column :users, :date_naissance
    remove_column :users, :pays
    remove_column :users, :ville
    remove_column :users, :telephone_personnel
    remove_column :users, :photo
    remove_column :users, :chofer
  end
end
