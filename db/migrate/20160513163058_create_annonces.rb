class CreateAnnonces < ActiveRecord::Migration
  def up
    create_table :annonces do |t|
      t.string  :ville_depart
      t.string  :ville_arrive
      t.date  :date_depart
      t.integer :nombre_chauffeurs
      t.string  :itiniraire
      t.integer :nombre_place
      t.string :marque_vehicule
      t.integer :annee_vehicule
      t.text  :photos_vehicule
      t.integer :prix_passager
      t.integer :poid_max_passager
      t.boolean :accept_colis
      t.boolean :accept_colis_valeur
      t.integer :prix_kg_colis
      t.integer :poid_max_colis
      t.integer :poid_min_colis
      t.string  :telephones
      t.string  :emails
      t.text  :description
      t.integer :arrets_chaque
      t.integer :notes
      t.string  :commentaires
      t.timestamps null: false
    end
  end
  def down
    drop_table :annonces
  end
  
end
