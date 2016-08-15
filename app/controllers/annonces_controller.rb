class AnnoncesController < ApplicationController
  before_action :set_annonce, only: [:show, :edit, :update, :destroy]

  # GET /annonces
  # GET /annonces.json
  def index
    if current_user.email == "nohchi.eu@gmail.com"
    @annonces = Annonce.all
    else 
    redirect_to root_path, notice: 'Vam nelzya na etu stranicu'
    end
  end

  
  # GET /annonces/1
  # GET /annonces/1.json
  def show
  end

  # GET /annonces/new
  def new
    if user_signed_in?
      @annonce = Annonce.new
    else
      redirect_to new_user_session_path, notice: 'Для того чтобы создать объявление необходимо зарегистрироваться'
    end
  end

  # GET /annonces/1/edit
  def edit
  end

  # POST /annonces
  # POST /annonces.json
  def create
    @annonce = current_user.annonces.build(annonce_params)

    respond_to do |format|
      if @annonce.save
        format.html { redirect_to @annonce, :flash => {:notice => "объявление создано" }}
        format.json { render :show, status: :created, location: @annonce }
      else
        format.html { render :new }
        format.json { render json: @annonce.errors, status: :unprocessable_entity }
      end
    end
  end

  def mesannonces
    @mesannonces = Kaminari.paginate_array(current_user.annonces).page(params[:page]).per(6)
  end
  # PATCH/PUT /annonces/1
  # PATCH/PUT /annonces/1.json
  def update
    respond_to do |format|
      if @annonce.update(annonce_params)
        format.html { redirect_to @annonce,:flash => { :notice => "объявление обновлен" } }
        format.json { render :show, status: :ok, location: @annonce }
      else
        format.html { render :edit }
        format.json { render json: @annonce.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /annonces/1
  # DELETE /annonces/1.json
  def destroy
    @annonce.destroy
    respond_to do |format|
      format.html { redirect_to annonces_moiobyavlenie_path, notice: 'объявление удалено' }
    end
  end

  private
  
    # Use callbacks to share common setup or constraints between actions.
    def set_annonce
      @annonce = Annonce.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def annonce_params
      params.require(:annonce).permit(:ville_depart, :ville_arrive, :date_depart, :nombre_chauffeurs, :nombre_place, :telephones, :marque_vehicule, :annee_vehicule, :prix_passager, :poid_max_passager, :accept_colis, :accept_colis_valeur, :prix_kg_colis, :poid_max_colis, :poid_min_colis, :arrets_chaque, :description, :image, :image2, :image3, :villeinter1, :villeinter2, :villeinter3, :villeinter4, :villeinter5, :villeinter6, :villeinter7, :villeinter8, :villeinter9, :villeinter10, :telephones2, :telephones3, :telephones4, :telephones5, :telephones_type1, :telephones_type2, :telephones_type3, :telephones_type4, :telephones_type5, :telephone_type1, :telephone_type2, :telephone_type3, :telephone_type4, :wifi, :chay)
    end
    
    
end
