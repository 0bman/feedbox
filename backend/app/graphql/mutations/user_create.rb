# frozen_string_literal: true

class Mutations::UserCreate < Mutations::BaseMutation
  field :user, Types::UserType, null: true
  field :errors, Types::ValidationErrorsType, null: true

  argument :attributes, Types::Inputs::UserCreateAttributes, required: true

  def resolve(attributes:)
    user = User.new(attributes.to_h)

    if user.save
      { user: user }
    else
      { errors: user.errors }
    end
  end
end
