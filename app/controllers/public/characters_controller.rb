class Public::CharactersController < ApplicationController
  before_action :set_character, only: [:show, :edit, :update, :destroy]
  before_action :is_matching_login_user, only: [:edit, :update, :destroy]

  def index
    @characters = Character.publicly_visible
  end

  def show
  end

  def edit
  end

  def update
    if @character.update(character_params)
      redirect_to character_path(@character.id)
      flash[:notice] = "変更が完了しました"
    else
      render :edited
    end
  end

  def new
    @character = Character.new
  end

  def create
    @character = Character.new(character_params)
    @character.user_id = current_user.id
    if @character.save
      redirect_to character_path(@character.id)
      flash[:notice] = "保存しました"
    else
      render :new
    end
  end

  def destroy
    @character.destroy
    flash[:notice] = "削除が完了しました"
    redirect_to characters_path
  end

  private

  def set_character
    @character = Character.find(params[:id])
  end

  def character_params
    params.require(:character).permit(:name, :detail, :sex, :age, :height, :weight, :public, :text_color, :background_color, :form_color, :standing_picture, :expression_1, :expression_2, :expression_3, :expression_4, :background_image)
  end

  def is_matching_login_user
    character = Character.find(params[:id])
    unless character.user_id == current_user.id
      redirect_to characters_path
    end
  end
end
