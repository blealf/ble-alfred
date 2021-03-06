Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :educations, only: [:index]
      resources :experiences, only: [:index, :duty]
      resources :job_duties, only: [:index]
      get 'experiences/:id/job_duties', to: 'experiences#duty'
      resources :skills, only: [:index]
      resources :contacts, only: [:index, :create, :new]
    end
  end

  root to: "homes#index"
end
