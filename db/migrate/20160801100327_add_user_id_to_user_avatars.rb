class AddUserIdToUserAvatars < ActiveRecord::Migration
  def change
  	add_column :user_avatars, :user_id, :integer
  end
end
