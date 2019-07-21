# frozen_string_literal: true

require 'rails_helper'

RSpec.describe FeedboxSchema do
  subject { described_class.execute(query_string, context: {}, variables: {}) }

  let(:resp) { parse(subject.to_json) }

  context 'all users' do
    let!(:user) { create(:user) }

    let(:query_string) do
      <<-GRAPHQL
        query {
          users {
            id
            email
            username
          }
        }
      GRAPHQL
    end

    it { expect(resp.data.users.first.id).to include(user.id.to_s) }
    it { expect(resp.data.users.first.email).to include(user.email) }
    it { expect(resp.data.users.first.username).to include(user.username) }
  end
end
