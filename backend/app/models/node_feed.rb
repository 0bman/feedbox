# frozen_string_literal: true

class NodeFeed < ApplicationRecord
  belongs_to :feed
  belongs_to :node
end
