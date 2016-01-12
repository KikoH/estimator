class Feature < ActiveRecord::Base
	def table_name?
		self.table_name = "size"
	end
end
