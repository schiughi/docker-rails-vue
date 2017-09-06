Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'staffs#index'
  resources :staffs do
    get :search , on: :collection 
  end
end
