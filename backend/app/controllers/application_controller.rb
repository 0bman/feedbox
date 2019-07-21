# frozen_string_literal: true

class ApplicationController < ActionController::API
  include ActionController::Cookies

  def current_user
    jwt = cookies.signed[:jwt]
    return unless jwt

    decoded = Jwt::DecodingService.new(jwt).decrypt!
    @current_user ||= User.find(decoded['sub']['user_id'])
  end
end
