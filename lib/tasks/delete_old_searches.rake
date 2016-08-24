namespace :delete do 
	desc 'Delete searches older than 2 days'
	taks :old_searches => :environment do 
		Search.where('created_at < ?', 2.days.ago).each do |search|
			search.destroy
		end
	end
end