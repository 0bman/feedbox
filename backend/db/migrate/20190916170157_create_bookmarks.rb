# frozen_string_literal: true

class CreateBookmarks < ActiveRecord::Migration[5.2]
  def change
    create_table :bookmarks do |t|
      t.belongs_to :user, null: false
      t.belongs_to :entry, null: false

      t.timestamps
    end

    add_index :bookmarks, %i[user_id entry_id], unique: true
  end
end
