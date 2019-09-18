# frozen_string_literal: true

class Bookmark < ApplicationRecord
  belongs_to :user
  belongs_to :entry

  validates :user_id, :entry_id, presence: true
  validates :entry_id, uniqueness: { scope: :user_id }
end
