Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'staffs#index'
  scope :api, { format: 'json' } do
    resources :staffs do
      get :search , on: :collection
    end
    mount_devise_token_auth_for 'User', at: 'auth' , controllers: {
      registrations: 'api/auth/registrations'
    }
  end
  resources :staffs
end
