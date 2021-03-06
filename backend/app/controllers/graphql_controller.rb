# frozen_string_literal: true

class GraphqlController < ApplicationController
  def execute
    result = FeedboxSchema.execute(
      query,
      variables: variables,
      context: context,
      operation_name: operation_name
    )
    render json: result
  rescue StandardError => e
    raise e unless Rails.env.development?

    handle_error_in_development e
  end

  private

  def variables
    ensure_hash(params[:variables])
  end

  def query
    params[:query]
  end

  def operation_name
    params[:operationName]
  end

  def context
    {
      cookies: cookies,
      current_user: current_user,
      decode_service: Jwt::DecodingService,
      generation_service: Jwt::GenerationService
    }
  end

  # Handle form data, JSON body, or a blank value
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end

  def handle_error_in_development(error)
    logger.error eroor.message
    logger.error eroor.backtrace.join("\n")

    render json: {
      error: { message: error.message, backtrace: error.backtrace }, data: {}
    }, status: 500
  end
end
