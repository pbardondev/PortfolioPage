Rails.application.routes.draw do
  root to: 'static_pages#root'
  get '/about', to: 'static_pages#about'
  get '/asteroids', to: 'static_pages#asteroids'
  get '/resume', to: 'static_pages#resume'
end
