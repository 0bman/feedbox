# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'with validations' do
    before { create(:user) }

    let(:invalid_emails) { ['email@aae.f', 'emailaae.fa', 'emailaae@.fa'] }

    it { is_expected.to have_secure_password }
    it { is_expected.to validate_uniqueness_of(:email) }
    it { is_expected.to validate_length_of(:password).is_at_least(6) }
    it { is_expected.to allow_value('email@aae.fo').for(:email) }
    it { is_expected.not_to allow_value(invalid_emails).for(:email) }
  end
end
