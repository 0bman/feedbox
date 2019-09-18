# frozen_string_literal: true

class Types::Inputs::BookmarkToggleAttributes < Types::BaseInputObject
  description 'Attributes for toggling a bookmark'

  argument :entry_id, ID, required: true
end
