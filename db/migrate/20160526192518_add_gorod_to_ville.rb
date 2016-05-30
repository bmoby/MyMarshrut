class AddGorodToVille < ActiveRecord::Migration
  def change
    add_column :villes, :gorod, :string
  end
end
