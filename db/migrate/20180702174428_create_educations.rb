class CreateEducations < ActiveRecord::Migration[5.2]
  def change
    create_table :educations do |t|
      t.string :institution
      t.string :degree
      t.string :course
      t.date :start_date
      t.date :end_date
      t.string :additional_info

      t.timestamps
    end
  end
end
