# frozen_string_literal: true

class FeedboxSchema < GraphQL::Schema
  rescue_from(ActiveRecord::RecordNotFound) { 'Not found' }

  mutation(Types::MutationType)
  query(Types::QueryType)
end
