# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :users, [UserType], null: false, extras: [:lookahead] do
      description 'Get all users'
    end

    def users(lookahead:)
      columns = lookahead.selections.map(&:name)
      columns.delete(:__typename)
      User.select(columns)
    end
  end
end
