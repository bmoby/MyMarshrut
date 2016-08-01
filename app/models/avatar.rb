class Avatar < ActiveRecord::Base
	belongs_to :user
	dragonfly_accessor :image
end
