class SearchesController < ApplicationController
  
  
  
  def create
    @search = Search.create(search_params)
    redirect_to @search
  end
  
  def show
    @search = Search.find(params[:id])
    @page1 = @search.search_annonces.where(["date_depart >= ?", Date.today]).order(date_depart: :asc)
    @page2 = @search.search_annonces.where(["date_depart < ?", Date.today]).order(date_depart: :desc)
    @pages = @page1 + @page2
    @lespagesall = Kaminari.paginate_array(@pages).page(params[:page]).per(6)
  end
  
  def update
    @search = Search.create(search_params)
    redirect_to @search
  end
  
  def searchall
    @search = Search.create(nil)
    @page1 = @search.search_annonces.where(["date_depart >= ?", Date.today]).order(date_depart: :asc)
    @page2 = @search.search_annonces.where(["date_depart < ?", Date.today]).order(date_depart: :desc)
    @pages = @page1 + @page2
    @lespagesall = Kaminari.paginate_array(@pages).page(params[:page]).per(6)
    render "show"
  end
  
  
  private
  
  def search_params
    params.require(:search).permit(:ville_d, :ville_a)
  end 
  
end
