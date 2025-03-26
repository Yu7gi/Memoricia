class AddCustomizationToCharacters < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :background_color, :string, default: "#ffffff"
    add_column :characters, :form_color, :string, default: "#000000"
    add_column :characters, :text_color, :string, default: "#ffffff"
  end
end
