# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :users, [UserType], null: false, extras: [:lookahead] do
      description 'Get all users'
    end

    field :nodes, [NodeType], null: false, extras: [:lookahead] do
      description 'Get all nodes'
    end

    def users(lookahead:)
      User.select(columns(lookahead))
    end

    def nodes(lookahead:)
      Node.select(columns(lookahead)).order(:created_at)
    end

    private

    def columns(lookahead)
      columns = lookahead.selections.map(&:name)
      columns.delete(:__typename)
      columns
    end
  end
end
