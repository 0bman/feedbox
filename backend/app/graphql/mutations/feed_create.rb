# frozen_string_literal: true

class Mutations::FeedCreate < Mutations::BaseMutation
  field :feed, Types::FeedType, null: true
  field :errors, Types::ValidationErrorsType, null: true

  argument :attributes, Types::Inputs::FeedCreateAttributes, required: true

  def resolve(attributes:)
    feed = Feed.new(url: attributes[:url])
    feed.set_info_from_url!

    if feed.save
      { feed: feed }
    else
      { errors: feed.errors }
    end
  end
end
