# frozen_string_literal: true

class Node < ApplicationRecord
  validates :label, presence: true

  belongs_to :user
  has_many :node_feeds
  has_many :feeds, through: :node_feeds
  has_many :entries, through: :feeds
end
