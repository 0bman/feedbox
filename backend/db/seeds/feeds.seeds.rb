# frozen_string_literal: true

require_relative 'support'
extend Support

urls = [
  'lostfilm.tv',
  'seasonvar.ru',
  'https://www.liga.net/rss-page',
  'https://www.rollingstone.com/music/'
]

urls.map do |url|
  f = Feed.new(url: url, rss_url: url)
  f.set_info_from_url!
  f.save
  f.errors
end

notify(__FILE__)
