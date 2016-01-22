class Uifeature < ActiveRecord::Base
	default_scope 	{ order('id ASC')}

  	mount_uploader :image, FeatureUploader
end
