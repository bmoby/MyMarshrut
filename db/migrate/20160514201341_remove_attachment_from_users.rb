class RemoveAttachmentFromUsers < ActiveRecord::Migration
  def change
    remove_attachment :users, :avatar
  end
end
