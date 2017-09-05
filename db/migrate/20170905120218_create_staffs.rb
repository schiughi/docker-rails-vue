class CreateStaffs < ActiveRecord::Migration[5.1]
  def change
    create_table :staffs do |t|
      t.string :name
      t.integer :age, limit: 2
      t.date :joined_on

      t.timestamps
    end
  end
end
