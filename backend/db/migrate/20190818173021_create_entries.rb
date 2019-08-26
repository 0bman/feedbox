# frozen_string_literal: true

class CreateEntries < ActiveRecord::Migration[5.2]
  def change # rubocop:disable AbcSize
    create_table :entries do |t|
      t.belongs_to :feed, null: false
      t.string :author
      t.string :title
      t.text :summary
      t.text :content
      t.string :image
      t.datetime :published
      t.string :url
      t.string :link
      t.string :entry_id
      t.string :language
      t.json :categories

      t.timestamps
    end

    add_index :entries, :url, unique: true
    add_index :entries, :link, unique: true
    add_index :entries, :entry_id, unique: true
  end
end
