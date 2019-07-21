# frozen_string_literal: true

class Types::Inputs::SessionCreateAttributes < Types::BaseInputObject
  description 'Attributes for creating a session'

  argument :email, String, required: true
  argument :password, String, required: true
end
