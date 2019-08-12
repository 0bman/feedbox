# frozen_string_literal: true

class CreateNodes < ActiveRecord::Migration[5.2]
  def change
    create_table :nodes do |t|
      t.boolean :has_caret, default: true, null: false
      t.string :label, null: false
      t.integer :secondary_label
      t.boolean :is_expanded, default: true, null: false
      t.string :icon
      t.boolean :disabled, default: false, null: false
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
