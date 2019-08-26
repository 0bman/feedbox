# frozen_string_literal: true

require_relative 'support'
extend Support

User.create(email: 'test@test.com', username: 'test', password: 'password')

notify(__FILE__)
