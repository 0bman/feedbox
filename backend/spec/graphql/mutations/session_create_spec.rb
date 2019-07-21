# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Mutations::SessionCreate, type: :controller do
  subject { described_class.new(object: nil, context: context).resolve(args) }

  let(:error) { 'Incorrect email or password combination' }
  let(:user) { create(:user) }
  let(:context) do
    {
      cookies: cookies,
      decode_service: Jwt::DecodingService,
      generation_service: Jwt::GenerationService
    }
  end

  describe 'when params is valid' do
    let(:args) do
      {
        attributes: {
          email: user.email,
          password: user.password
        }
      }
    end

    it { expect(subject[:user]).to be_persisted }
    it { expect(subject[:user].email).not_to be_nil }
    it { expect(subject[:user].username).not_to be_nil }
    it { expect(subject[:error]).to be_nil }
  end

  describe 'when email is invalid' do
    let(:args) do
      {
        attributes: {
          email: 'invalid',
          password: user.password
        }
      }
    end

    it { expect(subject[:user]).to be_nil }
    it { expect(subject[:error]).to eq error }
  end

  describe 'when email is blank' do
    let(:user) { create(:user) }

    let(:args) do
      {
        attributes: {
          email: nil,
          password: user.password
        }
      }
    end

    it { expect(subject[:user]).to be_nil }
    it { expect(subject[:error]).to eq error }
  end

  describe 'when password is blank' do
    let(:args) do
      {
        attributes: {
          email: user.email,
          password: nil
        }
      }
    end

    it { expect(subject[:user]).to be_nil }
    it { expect(subject[:error]).to eq error }
  end
end
