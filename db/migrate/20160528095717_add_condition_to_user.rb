class AddConditionToUser < ActiveRecord::Migration
  def change
    add_column :users, :condition, :boolean
  end
end
