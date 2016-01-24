ActiveAdmin.register Analytic do

menu parent: "Features"
permit_params :title, :description, :price, :image, :developer_days, :designer_days, :name

#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if resource.something?
#   permitted
# end


end
