# frozen_string_literal: true

class Mutations::NodeCreate < Mutations::BaseMutation
  field :node, Types::NodeType, null: true
  field :errors, Types::ValidationErrorsType, null: true

  argument :attributes, Types::Inputs::NodeCreateAttributes, required: true

  def resolve(attributes:)
    current_user = context[:current_user]
    node = current_user.nodes.build(attributes.to_h)

    if node.save
      { node: node }
    else
      { errors: node.errors }
    end
  end
end
