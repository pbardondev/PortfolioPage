class StaticPagesController < ApplicationController
  def root
    render 'index'
  end

  def asteroids
    render 'asteroids'
  end
end
