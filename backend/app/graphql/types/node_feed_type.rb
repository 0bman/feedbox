# frozen_string_literal: true

module Types
  class NodeFeedType < Types::BaseObject
    field :node, NodeType, null: false
    field :feeds, [FeedType], null: false
  end
end
