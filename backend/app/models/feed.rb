# frozen_string_literal: true

class Feed < ApplicationRecord
  validate :site_should_include_rss
  validates :name, :url, :rss_url, presence: true
  validates :url, :rss_url, uniqueness: true

  def set_info_from_url!
    set_info
    set_meta
    self
  end

  def url=(val)
    u = val.sub(%r{^https?\:\/\/?}, '')
           .sub(%r{^www?\.\/?}, '')
    super(u.split('/').first)
  end

  private

  def page
    @page ||= MetaInspector.new('https://' + url)
  end

  def site_should_include_rss
    return if Feedbag.find(url).any?

    errors.add(:url, 'invalid url, site must include rss or atom page')
  end

  def set_info
    self.name = page.meta['og:site_name']
    self.rss_url = Feedbag.find(url).first
    self.title = page.best_title
    self.description = page.best_description
  end

  def set_meta
    self.favicon = page.images.favicon
    self.scheme = page.scheme
    self.keywords = page.meta_tag['name']['keywords']
  end
end
