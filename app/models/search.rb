class Search < ActiveRecord::Base
  paginates_per 6
  def search_annonces
    depart = "%#{ville_d}%"
    arrive = "%#{ville_a}%"
    annonces = Annonce.all
    annonces = annonces.where("ville_depart LIKE :search OR villeinter1 LIKE :search OR villeinter2 LIKE :search OR villeinter3 LIKE :search OR villeinter4 LIKE :search OR villeinter5 LIKE :search OR villeinter6 LIKE :search OR villeinter7 LIKE :search OR villeinter8 LIKE :search OR villeinter9 LIKE :search OR villeinter10 LIKE :search", search: depart) if ville_d.present?
    annonces = annonces.where("ville_arrive LIKE :search OR villeinter1 LIKE :search OR villeinter2 LIKE :search OR villeinter3 LIKE :search OR villeinter4 LIKE :search OR villeinter5 LIKE :search OR villeinter6 LIKE :search OR villeinter7 LIKE :search OR villeinter8 LIKE :search OR villeinter9 LIKE :search OR villeinter10 LIKE :search", search: arrive) if ville_a.present?
    return annonces
  end
end
