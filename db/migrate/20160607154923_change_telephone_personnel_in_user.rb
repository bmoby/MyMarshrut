class ChangeTelephonePersonnelInUser < ActiveRecord::Migration
  def change
    rename_column :users, :telephone_personnel, :mobile_number
    add_column :users, :verification_code, :string
    add_column :users, :is_verified, :boolean
  end
end
