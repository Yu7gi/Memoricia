class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.integer :user_id, null: false
      t.string :name
      t.text :detail
      t.string :sex
      t.string :age
      t.string :height
      t.string :weight
      t.boolean :public

      t.timestamps
    end
  end
end
