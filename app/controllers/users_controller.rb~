class UsersController < ApplicationController
  def create
    @users = []
    if params[:data].kind_of?(Array)
      params[:data].each do |data|
        user = User.create(data)
        @users << user
      end
    else
      user = User.create(params[:data])
      @users << user
    end
    render :action => 'show'
  end

  def show
    @users = User.all
  end

  def update
    @users = []
    if params[:data].kind_of?(Array)
      params[:data].each do |data|
        user = User.find(data[:id])
        user.update_attributes(data)
        @users << user
      end
    else
      user = User.find(params[:data][:id])
      user.update_attributes(params[:data])
      @users << user
    end
    render :action => 'show'
  end
  
  def destroy
    @users = []
    if params[:data].kind_of?(Array)
      params[:data].each do |data|
        user = User.find(data[:id]).destroy
      end
    else
      user = User.find(params[:data][:id]).destroy
    end
    render :action => 'show'
  end    
end
