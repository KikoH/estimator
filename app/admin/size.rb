ActiveAdmin.register Size do
menu parent: "Features"
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :title, :description, :price, :image, :developer_days, :designer_days, :name


action_item :new, only: :show do
    link_to 'Create another', new_admin_size_path
end

form(:html => { :multipart => true }) do |f|
    f.inputs "Size" do
      f.input :title
      f.input :description
      f.input :price
      f.input :image, :as => :file
      f.input :developer_days
      f.input :designer_days
      f.input :name
    end
    f.actions
  end

end
