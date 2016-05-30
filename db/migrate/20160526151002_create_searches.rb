class CreateSearches < ActiveRecord::Migration
  def change
    create_table :searches do |t|
      t.string :ville_d
      t.string :ville_a

      t.timestamps null: false
    end
  end
end
