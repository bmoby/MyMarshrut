class DestroyTableUserAvatar < ActiveRecord::Migration
  def change
  	drop_table :user_avatars
  end
end
