class VerificationsController < ApplicationController
  def create
    current_user.verification_code =  1_000_000 + rand(10_000_000 - 1_000_000)
    current_user.save

    to = current_user.mobile_number

    @twilio_client = Twilio::REST::Client.new ENV['TWILIO_SID'], ENV['TWILIO_TOKEN']
    @twilio_client.account.sms.messages.create(
      :from => ENV['TWILIO_PHONE_NUMBER'],
      :to => to,
      :body => "Ваш код MyMarshrut: #{current_user.verification_code}."
    )
    redirect_to edit_user_registration_path, :flash => { :errors => "На ваш телефон был отправлен код пожалуйста введите его и нажмите на < Подтвердить > " }
    return
  end
  
  def verify
        if current_user.verification_code == params[:verification_code]
        current_user.is_verified = true
        current_user.verification_code = ''
        current_user.verifiednumber = current_user.mobile_number
        current_user.save
        redirect_to edit_user_registration_path, :flash => { :errors => "Поздровляем, вы подтвердили свой номер телефона теперь вы можите создать обявление" }
       
        return
      else
        redirect_to edit_user_registration_path, :flash => { :success => "Не правельный код. Попробуйте еше раз, или нажимите на кнопку Запрос Кода для того чтобы получить новый код" }
        return
      end
  end
end
