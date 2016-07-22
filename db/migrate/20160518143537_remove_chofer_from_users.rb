class RemoveChoferFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :chofer, :boolean
  end
end
