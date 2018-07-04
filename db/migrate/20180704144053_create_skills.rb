class CreateSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |t|
      t.string :skill
      t.string :category
      t.integer :rank

      t.timestamps
    end
  end
end
