class AddTelephonesToAnnonce < ActiveRecord::Migration
  def change
  	add_column :annonces, :telephones2, :string
  	add_column :annonces, :telephones3, :string
  	add_column :annonces, :telephones4, :string
  	add_column :annonces, :telephones5, :string
  end
end
