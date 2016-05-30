class SearchesController < ApplicationController
  
  def new
    @search = Search.new
  end
  
  def create
    @search = Search.create(search_params)
    redirect_to @search
  end
  
  def show
    @search = Search.find(params[:id])
    @lespages = @search.search_annonces.order(created_at: :desc).page(params[:page]).per_page(6)
  end
  
  private
  
  def search_params
    params.require(:search).permit(:ville_d, :ville_a)
  end
  
  
end
