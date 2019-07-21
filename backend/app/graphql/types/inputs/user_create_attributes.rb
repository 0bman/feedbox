# frozen_string_literal: true

class Types::Inputs::UserCreateAttributes < Types::BaseInputObject
  description 'Attributes for creating a user'

  argument :email, String, required: true
  argument :username, String, required: true
  argument :password, String, required: true
  argument :password_confirmation, String, required: true
end
