# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_16_170157) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookmarks", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "entry_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["entry_id"], name: "index_bookmarks_on_entry_id"
    t.index ["user_id", "entry_id"], name: "index_bookmarks_on_user_id_and_entry_id", unique: true
    t.index ["user_id"], name: "index_bookmarks_on_user_id"
  end

  create_table "entries", force: :cascade do |t|
    t.bigint "feed_id", null: false
    t.string "author"
    t.string "title"
    t.text "summary"
    t.text "content"
    t.string "image"
    t.datetime "published"
    t.string "url"
    t.string "link"
    t.string "entry_id"
    t.string "language"
    t.json "categories"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["entry_id"], name: "index_entries_on_entry_id", unique: true
    t.index ["feed_id"], name: "index_entries_on_feed_id"
    t.index ["link"], name: "index_entries_on_link", unique: true
    t.index ["url"], name: "index_entries_on_url", unique: true
  end

  create_table "feeds", force: :cascade do |t|
    t.string "name", null: false
    t.string "favicon"
    t.string "url", null: false
    t.string "rss_url", null: false
    t.string "title"
    t.string "description"
    t.string "scheme"
    t.string "keywords"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["rss_url"], name: "index_feeds_on_rss_url", unique: true
  end

  create_table "node_feeds", force: :cascade do |t|
    t.bigint "node_id", null: false
    t.bigint "feed_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["feed_id"], name: "index_node_feeds_on_feed_id"
    t.index ["node_id", "feed_id", "user_id"], name: "index_node_feeds_on_node_id_and_feed_id_and_user_id", unique: true
    t.index ["node_id"], name: "index_node_feeds_on_node_id"
    t.index ["user_id"], name: "index_node_feeds_on_user_id"
  end

  create_table "nodes", force: :cascade do |t|
    t.boolean "has_caret", default: true, null: false
    t.string "label", null: false
    t.integer "secondary_label"
    t.boolean "is_expanded", default: true, null: false
    t.string "icon"
    t.boolean "disabled", default: false, null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_nodes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "username", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
