class Message < ActiveRecord::Base
  
  def new_message?
    self.is_read(current_user)
  end
  
end
