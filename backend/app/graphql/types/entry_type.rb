# frozen_string_literal: true

module Types
  class EntryType < Types::BaseObject
    field :id, ID, null: false
    field :author, String, null: true
    field :title, String, null: false
    field :summary, String, null: true
    field :image, String, null: true
    field :content, String, null: true
    field :published, GraphQL::Types::ISO8601DateTime, null: true
    field :url, String, null: false
    field :categories, [String], null: true
  end
end
