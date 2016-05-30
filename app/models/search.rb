class Search < ActiveRecord::Base
  def search_annonces
    annonces = Annonce.all
    annonces = annonces.where(["date_depart > ?", Date.today])
    annonces = annonces.where(["ville_depart LIKE ?", "%#{ville_d}%"]) if ville_d.present?
    annonces = annonces.where(["ville_arrive LIKE ?", "%#{ville_a}%"]) if ville_a.present?
    return annonces
  end
end
