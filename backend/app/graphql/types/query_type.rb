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
      description 'Get all nodes with feeds'
    end

    def nodes(lookahead:)
      Node.select(columns(lookahead)).order(:created_at)
    end

    field :node, NodeType, null: false do
      description 'Get node by id'

      argument :id, ID, required: true
    end

    def node(id:)
      current_user.nodes.find(id)
    end

    field :search_feeds, [FeedType], null: false do
      description 'Get feeds by name'

      argument :query, String, required: true
    end

    def search_feeds(query:)
      Feed.search(query, fields: [:name], match: :word_start, limit: 20)
    end

    field :feeds_by_node, [EntryType], null: false, extras: [:lookahead] do
      description 'Get news by particular node'

      argument :node_id, ID, required: true
    end

    def feeds_by_node(node_id:, lookahead:)
      node = current_user.nodes.find(node_id)
      node.entries
          .includes(:feed)
          .select(columns(lookahead).push(:feed_id))
          .order(published: :desc)
    end

    field :feed, FeedType, null: false, extras: [:lookahead] do
      description 'Get feed by id'

      argument :id, ID, required: true
    end

    def feed(id:, lookahead:)
      Feed.select(columns(lookahead)).find(id)
    end

    field :entries, [EntryType], null: false, extras: [:lookahead] do
      description 'Get news by feed id'

      argument :id, ID, required: true
    end

    def entries(id:, lookahead:)
      Entry.includes(:feed)
           .select(columns(lookahead).push(:feed_id))
           .where(feed_id: id)
           .order(published: :desc)
    end

    private

    def columns(lookahead)
      selections = {}
      cols = []
      lookahead.selections.each do |obj|
        if obj.selections.any?
          selections[obj.name] = columns(obj)
        else
          cols << obj.name
        end
      end

      cols.delete(:__typename)
      cols.presence || selections
    end

    def current_user
      context[:current_user]
    end
  end
end
