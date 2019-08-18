# frozen_string_literal: true

class Mutations::NodeUpdate < Mutations::BaseMutation
  field :node, Types::NodeType, null: true
  field :errors, Types::ValidationErrorsType, null: true

  argument :attributes, Types::Inputs::NodeUpdateAttributes, required: true

  def resolve(attributes:)
    current_user = context[:current_user]
    node = current_user.nodes.find(attributes.to_h[:id])

    if node.update(attributes.to_h)
      { node: node }
    else
      { errors: node.errors }
    end
  end
end
