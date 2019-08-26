# frozen_string_literal: true

require_relative 'support'
extend Support

after :nodes, :feeds, :users do
  user = User.first
  node = user.nodes.first

  Feed.all.each do |f|
    NodeFeed.find_or_create_by(node_id: node.id, user_id: user.id, feed_id: f.id)
  end

  notify(__FILE__)
end
