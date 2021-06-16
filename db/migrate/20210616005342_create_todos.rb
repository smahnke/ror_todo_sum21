class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string :title
      t.string :complete
      t.string :boolean

      t.timestamps
    end
  end
end
