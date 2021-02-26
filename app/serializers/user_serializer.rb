# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  password_digest :string
#  user_name       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_name, :email, :password
end
