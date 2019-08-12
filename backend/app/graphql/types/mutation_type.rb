# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :sign_up, mutation: Mutations::UserCreate
    field :sign_in, mutation: Mutations::SessionCreate
    field :create_node, mutation: Mutations::NodeCreate
    field :update_node, mutation: Mutations::NodeUpdate
  end
end
