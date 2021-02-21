source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.1'

# gem 'bcrypt', '~> 3.1.7'
# gem 'image_processing', '~> 1.2'
# gem 'jbuilder', '~> 2.7'
# gem 'redis', '~> 4.0'
gem 'puma', '~> 5.0'
gem 'rails', '~> 6.1.3'
gem 'sqlite3', '~> 1.4'
gem 'devise'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.4', require: false

# gem 'rack-cors'

group :development, :test do
  gem 'pry-rails'
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'annotate', '~> 3.1', '>= 3.1.1'
  gem 'listen', '~> 3.3'
  gem 'spring'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
