# frozen_string_literal: true

class Types::Inputs::NodeUpdateAttributes < Types::BaseInputObject
  description 'Attributes for updating a node'

  argument :id, ID, required: true
  argument :is_expanded, Boolean, required: true
end
