class Public::CharactersController < ApplicationController
  def index
    @characters = Character.publicly_visible
  end

  def show
  end

  def edit
  end

  def new
  end

end
