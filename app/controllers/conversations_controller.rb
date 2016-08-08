class ConversationsController < ApplicationController
    before_action :set_conversation, only: [:replay]

  def index
    @conversations = current_user.mailbox.conversations
  end
  
  def show 
    @conversation = current_user.mailbox.conversations.find(params[:id])
    @messages = @conversation.messages.order(created_at: :asc)

    respond_to do |format|
      format.html {render :layout => !request.xhr?}
    end
  end
  
  def new
    @recipients = User.all
  end
  
  def create
    recipient = User.find(params[:user_id])
    if params[:body] != nil
      receipt = current_user.send_message(recipient, params[:body], params[:subject])
      redirect_to conversations_path(receipt.conversation)
    else
      redirect_to(:back)
    end
  end

  def replay
    @conversation = current_user.mailbox.conversations.find(params[:id])
    @receipt = current_user.reply_to_conversation(@conversation, params[:body])
    respond_to do |format|
      format.html {render :layout => !request.xhr?}
      format.js
    end
  end
  
  private
  def set_conversation
    @conversation = current_user.mailbox.conversations.find(params[:id])
  end
end
