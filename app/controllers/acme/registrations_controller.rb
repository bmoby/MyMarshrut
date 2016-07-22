class Acme::RegistrationsController < Devise::RegistrationsController
  before_filter :configure_account_update_params, only: [:update]

  def configure_account_update_params
    devise_parameter_sanitizer.for(:account_update){ |u| u.permit(:mobile_number, :prenom, :email, :password, :current_password)}
  end
  
  protected

     def after_update_path_for(current_user)
       edit_user_registration_path
     end
end