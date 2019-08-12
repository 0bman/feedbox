# frozen_string_literal: true

class Node < ApplicationRecord
  validates :label, presence: true

  belongs_to :user
end
