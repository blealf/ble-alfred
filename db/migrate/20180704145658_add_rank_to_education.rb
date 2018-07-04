class AddRankToEducation < ActiveRecord::Migration[5.2]
  def change
    add_column :educations, :rank, :integer
  end
end
