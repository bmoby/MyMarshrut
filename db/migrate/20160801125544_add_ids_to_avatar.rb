class AddIdsToAvatar < ActiveRecord::Migration
  def change
  	add_column :avatars, :image_uid, :string
  	add_column :avatars, :image_name, :string
  end
end
