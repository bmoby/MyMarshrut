class AddVerifiednumberToUser < ActiveRecord::Migration
  def change
    add_column :users, :verifiednumber, :string
  end
end
