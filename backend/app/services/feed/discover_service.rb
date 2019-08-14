# frozen_string_literal: true

class Feed::DiscoverService
  def self.parse(url)
    new(url).parse
  end

  def self.valid?(url)
    new(url).valid?
  end

  def self.rss_url(url)
    new(url).rss_url
  end

  def initialize(url, finder = Feedbag, parser = Feedjira)
    @url = url
    @finder = finder
    @parser = parser
  end

  def parse
    @parse ||= get_feed_for_url(@url, @parser) do
      # error = 'No feeds with matching url.'
      error = false
      urls = @finder.find(@url)
      return error if urls.empty?

      get_feed_for_url(urls.first, @parser) do
        return error
      end
    end
  end

  def valid?
    @finder.feed?(@url) || @finder.find(@url).any? || parse.present?
  end

  def rss_url
    return @url if valid?

    @finder.find(@url).first
  end

  private

  def get_feed_for_url(url, parser)
    if Feedbag.feed?(url)
      feed = parser.parse(xml(url))
      feed.feed_url ||= url
      feed
    else
      yield
    end
  end

  def xml(url)
    URI.open(url) do |io|
      io.set_encoding(Encoding.default_external)
      io.read
    end
  end
end
