class CreateAvatars < ActiveRecord::Migration
  def change
    create_table :avatars do |t|

      t.timestamps null: false
      t.string :image_uid
      t.string :image_name
      t.integer :user_id
    end
  end
end