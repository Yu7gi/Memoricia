Rails.application.routes.draw do
  get 'characters/index'
  get 'characters/show'
  get 'characters/edit'
  get 'characters/new'

  scope module: :public do
    resources :characters, only: [:new, :index, :show, :create, :edit, :update, :destroy]
  end

  devise_for :users, controllers: {
    registrations: "public/registrations",
    sessions: "public/sessions"
  }

  root :to =>"homes#top"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
