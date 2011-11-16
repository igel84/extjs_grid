class WelcomeController < ApplicationController
  def index    
  end
  
  def test
  end
  
  def show
  end
  
  def nodes
  end
  
  def test_load
    render :json => '<b>sdfsdf</b>' #params[:textName]
  end
  
  def plant
    render :json => Plant.new( :common => 'первая' )
  end
  
  def update
    render :json => Plant.new( :common => 'первая1123' )
  end
  
end
