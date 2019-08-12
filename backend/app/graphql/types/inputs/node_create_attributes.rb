# frozen_string_literal: true

class Types::Inputs::NodeCreateAttributes < Types::BaseInputObject
  description 'Attributes for creating a node'

  argument :label, String, required: true
end
