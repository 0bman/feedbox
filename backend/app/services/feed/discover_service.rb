# frozen_string_literal: true

class Feed::DiscoverService
  def self.parse(url, finder = Feedbag, parser = Feedjira)
    new(url, finder, parser).parse
  end

  def initialize(url, finder, parser)
    @url = url
    @finder = finder
    @parser = parser
  end

  def parse
    error = 'No feeds with matching url.'
    get_feed_for_url(@url, @parser) do
      urls = @finder.find(@url)
      return error if urls.empty?

      get_feed_for_url(urls.first, @parser) do
        return error
      end
    end
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
