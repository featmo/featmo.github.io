source 'https://rubygems.org'
ruby '2.6.6'

require 'json'
require 'open-uri'
require 'em/pure_ruby'

gem 'eventmachine', '~> 1.2', '>= 1.2.7'

group :jekyll_plugins do
    gem 'jekyll-livereload'
    gem 'jekyll-pwa-plugin'
end

group :development do
    gem 'foreman'
    gem 'octopress-autoprefixer'
end

group :test do
    gem 'rake', '>= 12.3.3'
    gem "nokogiri", ">= 1.10.8"
    gem 'html-proofer', '~> 3.0.0'
end
