Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :educations
      resources :experiences
      resources :job_duties
      get 'experiences/:id/job_duties', to: 'experiences#duty'
    end
  end

  root to: "homes#index"
end
