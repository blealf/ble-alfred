class CreateJobDuties < ActiveRecord::Migration[5.2]
  def change
    create_table :job_duties do |t|
      t.string :duty
      t.references :experience, foreign_key: true

      t.timestamps
    end
  end
end
