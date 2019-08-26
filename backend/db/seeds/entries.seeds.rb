# frozen_string_literal: true

require_relative 'support'
extend Support

after :feeds do
  notify(__FILE__)
  Feed.all.each { |f| Feed::DiscoverService.fetch(f) }
end
