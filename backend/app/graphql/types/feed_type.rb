# frozen_string_literal: true

module Types
  class FeedType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :favicon, String, null: false
    field :url, String, null: false
    field :rss_url, String, null: false
    field :title, String, null: false
    field :description, String, null: false
    field :keywords, String, null: false
  end
end
