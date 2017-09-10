Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'staffs#index'
  scope :api, { format: 'json' } do
    resources :staffs do
      get :search , on: :collection
    end
  end
  resources :staffs
end
