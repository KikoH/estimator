ActiveAdmin.register Uifeature do
menu parent: "Features"
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :title, :description, :price, :image, :developer_days, :designer_days, :name

action_item :new, only: :show do
    link_to 'Create another', new_admin_uifeature_path
end


end
