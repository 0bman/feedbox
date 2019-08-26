# frozen_string_literal: true

require_relative 'support'
extend Support

after :users do
  user = User.first

  user.nodes.find_or_create_by(label: 'News')

  notify(__FILE__)
end
