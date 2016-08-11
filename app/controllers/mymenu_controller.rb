class MymenuController < ApplicationController

	def index
		@avatar = Avatar.new
	end
end
