module Acme::RegistrationsHelper
    def mobile_verification_button
      return nil unless current_user.needs_mobile_number_verifying?
      html = <<-HTML
      <div class='container-fluid text-center verification'>
      </br>
        <i class="fa fa-exclamation-triangle podtverdite" aria-hidden="true"></i> <h5>
          Пожалуйста подтвердите свой номер телефона #{current_user.mobile_number}</h5></br>
          <h6><em>(Если это не ваш номер то сначало поменяйте его нажмите на ИЗМЕНИТЬ и вернитесь обратно чтобы подтвердить свой номер)</em></h6>
        #{form_tag(verifications_path, method: "post")}
        #{button_tag('Запросить Код', type: "submit", class:"btn btn-primary")}
        </form>
        </br>
      </div>
      HTML
      html.html_safe
    end
    
    def verify_mobile_number_form
        if current_user.is_verified == true
          verify = <<-HTML
          <div class='verify'>
         <h5> <i class="fa fa-check-circle" aria-hidden="true"></i> Ваш номер #{current_user.verifiednumber} ' подтвержден'</h5>
          </div>
          HTML
          return verify.html_safe
        else
        p current_user.is_verified == true
        html = <<-HTML
        <div class='container-fluid text-center'>
        </br>
          <h5>Введите полученный код на ваш телефон</h5>
          #{form_tag(verifications_path, method: "patch")}
          #{text_field_tag('verification_code', "", class:'inputterkod')}
          #{button_tag('Подтвердить', type: "submit", class:'btn btn-primary')}
          </form>
          </br>
        </div>
        HTML
        html.html_safe
      end
      end
    
end
