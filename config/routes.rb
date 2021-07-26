Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :chart_data, only: [:index]

  get 'chart_data/fetchInfo', :to => 'chart_data#fetchInfo' #custom route to help get info from DB

  root "chart_data#index" #root becomes chart_data index
  
  get '*path' => redirect('/') #reroute to root from invalid route
  
end
