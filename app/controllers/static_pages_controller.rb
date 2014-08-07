class StaticPagesController < ApplicationController
  def root
    render 'index'
  end

  def asteroids
    render 'asteroids'
  end

  def resume
    pdf_filename = File.join(Rails.root, "public/DevResume.pdf")
    send_file(pdf_filename, :filename => "DevResume.pdf", :disposition => 'inline', :type => "application/pdf")
  end
end
