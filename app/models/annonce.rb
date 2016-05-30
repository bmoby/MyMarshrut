class Annonce < ActiveRecord::Base
  dragonfly_accessor :image
  belongs_to :user
  validates_presence_of :ville_depart, :message => "Вы не указали откуда вы едите!"
  validates_presence_of :ville_arrive, :message => "Вы не указали куда вы едите!"
  validates_presence_of :date_depart, :message => "Вы не указали когда вы едите!"
  validates_presence_of :nombre_chauffeurs, :message => "Вы не указали сколько водителей!"
  validates_presence_of :nombre_place, :message => "Вы не указали сколько мест в автомобиле!"
  validates_presence_of :marque_vehicule, :message => "Вы не указали какой у вас автомобиль!"
  validates_presence_of :annee_vehicule, :message => "Вы не указали какой год выпуска автомобиля!"
  validates_presence_of :prix_passager, :message => "Вы не указали цену за проезд!"
  validates_presence_of :poid_max_passager, :message => "Вы не указали сколько груза можно брать с собой!"
  validates_presence_of :arrets_chaque, :message => "Вы не указали как часто будете останавливатся!"
end
