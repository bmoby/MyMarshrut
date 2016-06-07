class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, 
         :recoverable, :rememberable, :trackable, :validatable
  has_many :annonces
  
  validates_presence_of :nom, :message => "Пожалуйста введите свою Фамилию."
  validates_presence_of :ville, :message => "Пожалуйста введите название города где вы проживаете."
  validates_presence_of :pays, :message => "Пожалуйста введите страну где вы прожываете."
  validates_presence_of :prenom, :message => "Пожалуйста введите своё Имя."
  validates_presence_of :telephone_personnel, :message => "Пожалуйста введите Телефон."
  

  def voditel?
    self.annonces.count != 0
  end
  
  acts_as_messageable
  
  def mailboxer_name
    self.nom
  end
  
  def mailboxer_email(object)
    self.email
  end
  
  def update_with_password(params, *options)
      current_password = params.delete(:current_password)

  if params[:password].blank?
    params.delete(:password)
    params.delete(:password_confirmation) if params[:password_confirmation].blank?
  end

  result = if params[:password].blank? || valid_password?(current_password)
    update_attributes(params, *options)
  else
    self.assign_attributes(params, *options)
    self.valid?
    self.errors.add(:current_password, current_password.blank? ? :blank : :invalid)
    false
  end

      clean_up_passwords
      result
  end
end
