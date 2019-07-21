# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :sign_up, mutation: Mutations::UserCreate
    field :sign_in, mutation: Mutations::SessionCreate
  end
end
