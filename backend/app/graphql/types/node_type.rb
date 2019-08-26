# frozen_string_literal: true

module Types
  class NodeType < Types::BaseObject
    field :id, ID, null: false
    field :has_caret, Boolean, null: false
    field :label, String, null: false
    field :secondary_label, Integer, null: true
    field :is_expanded, Boolean, null: false
    field :icon, String, null: true
    field :disabled, Boolean, null: false
    field :child_nodes, [FeedType], null: false, resolver_method: :feeds

    def feeds
      object.feeds
    end
  end
end
