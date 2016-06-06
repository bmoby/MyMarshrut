require 'dragonfly'
require 'dragonfly/s3_data_store'

# Configure
Dragonfly.app.configure do
  plugin :imagemagick

  secret "6ad74dec6da4d687f229ec062a3e16f96563b25c19907bb3b146cbca7851d12c"

  url_format "/media/:job/:name"
  if Rails.env.development? || Rails.env.test?
    datastore :file,
              root_path: Rails.root.join('public/system/dragonfly', Rails.env),
              server_root: Rails.root.join('public')
  else
    datastore :s3,
              bucket_name: mymarshrutimages,
              access_key_id: AKIAIGJ3FKUDUF6TCLZQ,
              secret_access_key: 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,
              url_scheme: 'https'
  end

  datastore :file,
    root_path: Rails.root.join('public/system/dragonfly', Rails.env),
    server_root: Rails.root.join('public')
end

# Logger
Dragonfly.logger = Rails.logger

# Mount as middleware
Rails.application.middleware.use Dragonfly::Middleware

# Add model functionality
if defined?(ActiveRecord::Base)
  ActiveRecord::Base.extend Dragonfly::Model
  ActiveRecord::Base.extend Dragonfly::Model::Validations
end
