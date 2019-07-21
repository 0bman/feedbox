# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Mutations::UserCreate, type: :controller do
  subject { described_class.new(object: nil, context: {}).resolve(args) }

  describe 'when params is valid' do
    let(:args) do
      { attributes: attributes_for(:user) }
    end

    it { expect(subject[:user]).to be_persisted }
    it { expect(subject[:user].email).not_to be_nil }
    it { expect(subject[:user].username).not_to be_nil }
    it { expect(subject[:user].password_digest).not_to be_nil }
    it { expect(subject[:errors]).to be_nil }
  end

  describe 'when email is invalid' do
    let(:args) do
      { attributes: attributes_for(:user, email: 'invalid') }
    end

    it { expect(subject[:user]).to be_nil }
    it { expect(subject[:errors]).not_to be_nil }
  end

  describe 'when email is blank' do
    let(:args) do
      { attributes: attributes_for(:user, email: nil) }
    end

    it { expect(subject[:user]).to be_nil }
    it { expect(subject[:errors]).not_to be_nil }
  end

  describe 'when password is blank' do
    let(:args) do
      { attributes: attributes_for(:user, password: nil) }
    end

    it { expect(subject[:user]).to be_nil }
    it { expect(subject[:errors]).not_to be_nil }
  end
end
