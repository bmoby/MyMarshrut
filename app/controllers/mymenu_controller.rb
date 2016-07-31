class MymenuController < ApplicationController
  before_filter :check_for_mobile

	def index

		render 'index'
	end
end
