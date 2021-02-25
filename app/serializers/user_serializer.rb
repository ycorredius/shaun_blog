class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_name, :email, :password
end
