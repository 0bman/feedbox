# frozen_string_literal: true

module Requests
  module JsonHelpers
    def parse(json)
      JSON.parse(json, object_class: OpenStruct)
    end
  end
end
