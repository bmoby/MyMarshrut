class VseuseriController < ApplicationController
  def index 
    if current_user.email == "nohchi.eu@gmail.com"
    	@vseuseri = User.all
    else
      redirect_to root_path, notice: "Vam syuda nelzya"
    end
  end
end
