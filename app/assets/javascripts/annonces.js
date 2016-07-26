$(document).ready(function() {
  var availableTags;
    availableTags = [
'Хасавюрт Xasavyurt Hasavyurt',
'Дагестан Dagestan',
'Махачкала Mahachkala Maxachkala',
'Нальчик Naltchik Nalchik',
'Варшава Warszawa Varsovie',
'Брест Brest',
'Грозный Grozny', 
'Москва Moscou',
'Новосибирск Novossibirsk',
'Екатеринбург Iekaterinbourg',
'Нижний Новгород Nijni Novgorod',
'Казань Kazan',
'Волгоград Volgograd',
'Воронеж Voronej',
'Саратов Saratov',
'Краснодар Krasnodar',
'Владивосток Vladivostok',
'Ставрополь Stavropol',
'Сочи Sotchi',
'Владикавказ Vladikavkaz',
'Нальчик Naltchik',
'Париж Paris',
'Марсель Marseille',
'Лион Lyon',
'Тулуза Toulouse',
'Ницца Nice',
'Нант Nantes',
'Страсбурr Strasbourg',
'Монпелье Montpellier',
'Бордо Bordeaux',
'Лилль Lille',
'Сент Этьен Saint Étienne',
'Клермон Ферран Clermont Ferrand',
'Мец Metz ',
'Перпиньян Perpignan',
'Безансон Besancon',
'Орлеан Orlean',
'Нанси Nancy',
'Авиньон Avignon',
'Безье Besier',
'Кан Cannes',
'Антверпен Antwerpen',
'Гент Gent',
'Шарлеруа Charleroi',
'Льеж Liège',
'Брюссель Bruxelles Brussel',
'Брюгге Brugge',
'Намюр Namur',
'Монс Mons',
'Лёвен Leuven',
'Мехелен Mechelen',
'Алст Aalst',
'Ла Лувьер La Louvière',
'Кортрейк Kortrijk',
'Хасселт Hasselt',
'Синт Никлас Sint Niklaas',
'Остенде Oostende',
'Турне Tournai',
'Генк Genk',
'Серен Seraing',
'Руселаре Roeselare',
'Вервье Verviers',
'Мускрон Mouscron',
'Дендермонде Dendermonde',
'Беринген Beringen',
'Тюрнхаут Turnhout',
'Синт Трёйден Sint Truiden',
'Локерен Lokeren',
'Берлин Berlin',
'Гамбург Hamburg',
'Мюнхен München',
'Кёльн Köln',
'Франкфурт на Майне Frankfurt am Main',
'Штутгарт Stuttgart',
'Дортмунд Dortmund',
'Дюссельдорф Düsseldorf',
'Эссен Essen',
'Бремен Bremen',
'Дрезден Dresden',
'Лейпциг Leipzig',
'Нюрнберг Nürnberg',
'Дуйсбург Duisburg',
'Бохум Bochum',
'Вупперталь Wuppertal',
'Билефельд Bielefeld',
'Бонн Bonn',
'Мюнстер Münster',
'Карлсруэ Karlsruhe',
'Вена Wien',
'Грац Graz',
'Линц Linz',
'Зальцбург Salzburg',
'Инсбрук Innsbruck',
'Клагенфурт ам Вёртерзе Klagenfurt am Wörthersee',
'Филлах Villach',
'Вельс Wels',
'Санкт Пёльтен St Pölten',
'Дорнбирн Dornbirn',
'Винер Нойштадт Wiener Neustadt',
'Штайр Steyr',
'Фельдкирх Feldkirch',
'Брегенц Bregenz',
'Бельгия Belgique Belgija',
'Австрия Österreich Avstrija',
'Германия Deutschland Germanija',
'Франция France Francija',
'Швейцария Suisse Shvicarija',
'Польша Polska Polsha',
'Украина Ukraina',
'Белоруссия Belorussija'
];
  $('#villedep').autocomplete({
    minLength: 3,
    source: availableTags
  });
  $('#villearr').autocomplete({
    minLength: 3,
    source: availableTags
  });
  $('.blanck').autocomplete({
    minLength: 3,
    source: availableTags
  });
  $('.infobtn').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).closest('.droite').find('.contact').hide('slide');
    $(this).closest('.droite').find('.infoa').show('slide');
  });

  $('.contactbtn').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).closest('.droite').find('.infoa').hide('slide');
    $(this).closest('.droite').find('.contact').show('slide');
  });
  
  $('.posilkiperevoz').change(function () {                
     $('.perevozka').toggle(this.checked);
  }).change(); //ensure visible state matches initially
  
  if($('#messagevoditelyu').val() ==  "") 
     $('#otpravitmessagevoditelyu').attr('disabled', true);

  $('#messagevoditelyu').keyup(function(){
        if($('#messagevoditelyu').val() !=  "") 
             $('#otpravitmessagevoditelyu').attr('disabled', false);    
    else
       $('#otpravitmessagevoditelyu').attr('disabled', true);   
  });
  
  var i = $('.villecount').length + 1;
  $('.villesdisplay').on('click', '.ajout', function(){
	  $('.villeinter'+i).show();
	 	if(i<=10){
	  		i++;
	  	} 
		else if (i = 10){
			i;
		};
  });

  $('.villesdisplay').on('click', '.enlev', function(){
	$('.villeinter'+(i-1)).hide();
	$('.villeinter'+(i-1)).find('.inputter').val('');
	if(i> 1){
		i--;
	} 
	else if (i = 1 ){
		i;
	};
  });

  var x = $('.numcount').length;
  $('.numdisplay').on('click', '.ajoutnum', function(){
    $('.num'+x).show();
    if(x<4){
        x++;
      } 
    else if (i = 4){
      i;
    };
  });

  $('.numdisplay').on('click', '.enlevnum', function(){
  $('.num'+(x-1)).hide();
  $('.num'+(x-1)).find('.inputter').val('');
  if(x> 1){
    x--;
  } 
  else if (i = 1 ){
    i;
  };
  });


  $('.sizescreen').text($(window).height() + 'x150');
  
});
