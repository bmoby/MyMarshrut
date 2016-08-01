class AddImagesidToUserAvatar < ActiveRecord::Migration
  def change
  	add_column :user_avatars, :image_uid, :string
  	add_column :user_avatars, :image_name, :string
  end
end
