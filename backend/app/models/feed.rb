# frozen_string_literal: true

class Feed < ApplicationRecord
  searchkick word_start: [:name]

  validate :site_should_include_rss
  validates :name, :url, presence: true
  validates :rss_url, uniqueness: true

  has_many :node_feeds
  has_many :nodes, through: :node_feeds
  has_many :entries

  def set_info_from_url!
    set_info
    set_meta
    self
  end

  def name=(val)
    super(val || url.titleize.split('.').join)
  end

  def url=(val)
    u = val.sub(%r{^https?\:\/\/?}, '')
           .sub(%r{^www?\.\/?}, '')
    super(u.split('/').first)
  end

  def rss_url=(val)
    super(Feed::DiscoverService.rss_url(val))
  end

  def icon
    favicon
  end

  def label
    name
  end

  private

  def page
    @page ||= MetaInspector.new(
      url,
      connection_timeout: 10,
      read_timeout: 5,
      retries: 2
    )
  end

  def site_should_include_rss
    return if rss_url.present? && Feed::DiscoverService.valid?(rss_url)

    errors.add(:rss_url, 'invalid url, site must include rss or atom page')
  end

  def set_info
    self.name = page.meta['og:site_name']
    self.title = page.best_title
    self.description = page.best_description
  end

  def set_meta
    self.favicon = page.images.favicon
    self.scheme = page.scheme
    self.keywords = page.meta_tag['name']['keywords']
  end
end
