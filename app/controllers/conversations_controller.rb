class ConversationsController < ApplicationController
  
  def index
    @conversations = current_user.mailbox.conversations
  end
  
  def show 
    @conversation = current_user.mailbox.conversations.find(params[:id])
    @messages = @conversation.messages.order(created_at: :asc)
  end
  
  def new
    @recipients = User.all
  end
  
  def create
    recipient = User.find(params[:user_id])
    if params[:body] != nil
      receipt = current_user.send_message(recipient, params[:body], params[:subject])
      redirect_to conversation_path(receipt.conversation)
    else
      redirect_to(:back)
    end
  end
  
  private
  def set_conversation
    @conversation = current_user.mailbox.conversations.find(params[:id])
  end
end
