class Annonce < ActiveRecord::Base
  dragonfly_accessor :image
    dragonfly_accessor :image2
      dragonfly_accessor :image3
  belongs_to :user
  validates_associated :user, :message => "Вы неможите создавать болче чем 4 объявление."
  validates_presence_of :ville_depart, :message => "Вы не указали откуда вы едите!"
  validates_presence_of :ville_arrive, :message => "Вы не указали куда вы едите!"
  validates_presence_of :date_depart, :message => "Вы не указали когда вы едите!"
  validates_presence_of :prix_passager, :message => "Вы не указали цену за проезд!"
end
