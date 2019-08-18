# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :users, [UserType], null: false, extras: [:lookahead] do
      description 'Get all users'
    end

    def users(lookahead:)
      User.select(columns(lookahead))
    end

    field :nodes, [NodeType], null: false, extras: [:lookahead] do
      description 'Get all nodes'
    end

    def nodes(lookahead:)
      Node.select(columns(lookahead)).order(:created_at)
    end

    field :node, NodeType, null: true do
      description 'Get node by id'

      argument :id, ID, required: true
    end

    def node(id:)
      current_user = context[:current_user]
      current_user.nodes.find(id)
    end

    field :search_feeds, [FeedType], null: false do
      description 'Get feeds by name'

      argument :query, String, required: true
    end

    def search_feeds(query:)
      Feed.search(query, fields: [:name], match: :word_start, limit: 20)
    end

    private

    def columns(lookahead)
      columns = lookahead.selections.map(&:name)
      columns.delete(:__typename)
      columns
    end
  end
end
