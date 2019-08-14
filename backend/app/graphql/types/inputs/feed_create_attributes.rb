# frozen_string_literal: true

class Types::Inputs::FeedCreateAttributes < Types::BaseInputObject
  description 'Attributes for creating a feed'

  argument :url, String, required: true
end
