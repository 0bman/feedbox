# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password

  validates :email, :password, :username, presence: true
  validates :password, length: { minimum: 6 }, confirmation: true
  validates :email, :username, uniqueness: true
  validates :email, format: {
    with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  }

  has_many :nodes
  has_many :feeds, through: :nodes
  has_many :entries, through: :feeds
  has_many :bookmarks

  def bookmarked?(entry_id)
    bookmarks.any? { |b| b.entry_id == entry_id }
  end
end
