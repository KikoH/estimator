ActiveAdmin.register Security do

menu parent: "Features"
permit_params :title, :description, :price, :image, :developer_days, :designer_days, :name

# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if resource.something?
#   permitted
# end


end
