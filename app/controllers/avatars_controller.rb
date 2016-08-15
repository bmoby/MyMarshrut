class AvatarsController < ApplicationController
  before_action :set_avatar, only: [:show, :edit, :update, :destroy]

  # GET /avatars
  # GET /avatars.json
  def index
  end

  # GET /avatars/1
  # GET /avatars/1.json
  def show
    render 'mymenu/index'
  end

  # GET /avatars/new
  def new
    if user_signed_in?
      @avatar = Avatar.new
    else
      redirect_to new_user_session_path, notice: 'Nea nelzya takoe delat'
    end
  end

  # GET /avatars/1/edit
  def edit
  end

  # POST /avatars
  # POST /avatars.json
  def create
     @avatar = current_user.avatars.build(avatar_params)

    respond_to do |format|
      if @avatar.save
        format.html { redirect_to @avatar, notice: 'Avatar sozdan.' }
        format.json { render :show, status: :created, location: @avatar }
      else
        format.html { render :new }
        format.json { render json: @avatar.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /avatars/1
  # PATCH/PUT /avatars/1.json
  def update
    respond_to do |format|
      if @avatar.update(avatar_params)
        format.html { redirect_to @avatar, notice: 'Avatar obnovlen.' }
        format.json { render :show, status: :ok, location: @avatar }
      else
        format.html { render :edit }
        format.json { render json: @avatar.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /avatars/1
  # DELETE /avatars/1.json
  def destroy
    @avatar.destroy
    respond_to do |format|
      format.html { redirect_to avatars_url, notice: 'Avatar udalen.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_avatar
      @avatar = Avatar.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def avatar_params
      params.require(:avatar).permit(:image)
    end
end
