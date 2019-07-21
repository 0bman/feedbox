# frozen_string_literal: true

class Mutations::SessionCreate < Mutations::BaseMutation
  field :user, Types::UserType, null: true
  field :error, String, null: true

  argument :attributes, Types::Inputs::SessionCreateAttributes, required: true

  def resolve(attributes:)
    user = User.find_by(email: attributes[:email])

    if user&.authenticate(attributes[:password])
      assign_jwt_cookies(user)

      { user: user }
    else
      context[:cookies].delete :jwt

      { error: 'Incorrect email or password combination' }
    end
  end

  private

  def assign_jwt_cookies(user)
    token = context[:generation_service].new(user_id: user.id).token
    time = 24.hours.from_now
    context[:cookies].signed[:jwt] = {
      value: token, expires: time, httponly: true
    }
  end
end
