# frozen_string_literal: true

class Entry < ApplicationRecord
  belongs_to :feed
  has_many :bookmarks

  validates :feed_id, presence: true
  validates :url, :link, uniqueness: true, allow_blank: true
  validate :check_content

  private

  def check_content
    return unless [title, url, link, summary, content].compact.count.zero?

    errors.add(:base, 'entry has no content')
  end
end
