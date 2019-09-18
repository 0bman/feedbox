# frozen_string_literal: true

class Mutations::BookmarkToggle < Mutations::BaseMutation
  field :message, String, null: true
  field :errors, Types::ValidationErrorsType, null: true

  argument :attributes, Types::Inputs::BookmarkToggleAttributes, required: true

  def resolve(attributes:)
    bookmark = current_user.bookmarks.find_or_initialize_by(attributes.to_h)

    if bookmark.persisted?
      bookmark.destroy
      { message: 'Successfully removed' }
    elsif bookmark.save
      { message: 'Successfully created' }
    else
      { errors: bookmark.errors }
    end
  end

  private

  def current_user
    context[:current_user]
  end
end
