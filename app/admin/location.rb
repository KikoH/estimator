ActiveAdmin.register Location do
menu parent: "Features"
permit_params :title, :description, :price, :image, :developer_days, :designer_days, :name
#

action_item :new, only: :show do
    link_to 'Create another', new_admin_location_path
end


end
