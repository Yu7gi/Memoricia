class ChangePublicDefaultInCharacters < ActiveRecord::Migration[6.1]
  def change
    change_column_default :characters, :public, true
  end
end
