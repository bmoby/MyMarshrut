class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  before_action :configure_permitted_parameters, if: :devise_controller?



  private 
  
  def check_for_mobile
  	prepare_for_mobile if mobile_device?
  	session[:mobile_override] = params[:mobile] if params[:mobile]
  end

  def prepare_for_mobile
  	prepend_view_path Rails.root + 'app' + 'views_mobile'
  end

  def mobile_device?
  	if session[:mobile_override]
  		session[:mobile_override] == "1"
  	else
  		(request.user_agent =~ /Mobile|webOS/) && (request.user_agent !~ /iPad/)
  	end
  end
	helper_method :mobile_device?
  
  protected
  
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up){ |u| u.permit(:prenom, :mobile_number, :email, :password, :condition)}
    devise_parameter_sanitizer.for(:sign_in){ |u| u.permit(:email, :password, :remember_me)}
  end
end
