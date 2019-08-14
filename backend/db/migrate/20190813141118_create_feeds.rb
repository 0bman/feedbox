# frozen_string_literal: true

class CreateFeeds < ActiveRecord::Migration[5.2]
  def change
    create_table :feeds do |t|
      t.string :name, null: false
      t.string :favicon
      t.string :url, null: false
      t.string :rss_url, null: false
      t.string :title
      t.string :description
      t.string :scheme
      t.string :keywords

      t.timestamps
    end

    add_index :feeds, :url, unique: true
    add_index :feeds, :rss_url, unique: true
  end
end
