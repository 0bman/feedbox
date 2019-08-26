# frozen_string_literal: true

class CreateNodeFeeds < ActiveRecord::Migration[5.2]
  def change
    create_table :node_feeds do |t|
      t.belongs_to :node, null: false
      t.belongs_to :feed, null: false
      t.belongs_to :user, null: false

      t.timestamps
    end

    add_index :node_feeds, %i[node_id feed_id user_id], unique: true
  end
end
