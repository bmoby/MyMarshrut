$(document).ready(function() {
var availableTags;
availableTags = [
'Хасавюрт Xasavyurt Hasavyurt',
'Дагестан Dagestan',
'Махачкала Mahachkala Maxachkala',
'Нальчик Naltchik Nalchik',
'Варшава Warszawa Varsovie',
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
'Махачкала Makhatchkala',
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
'Белоруссия Belorussija',
"Брест Brest"
];

    $( "#villesd" ).autocomplete({
		minLength:3,
      	source: availableTags
    });
    $( "#villesa" ).autocomplete({
		minLength:3,
      	source: availableTags
    });
    $( "#villesdsearch" ).autocomplete({
		minLength:3,
      	source: availableTags
    });
    $( "#villesasearch" ).autocomplete({
		minLength:3,
      	source: availableTags
    });
    $( "#villesdxs" ).autocomplete({
		minLength:3,
      	source: availableTags
    });
    $( "#villesaxs" ).autocomplete({
		minLength:3,
      	source: availableTags
    });
    $( "#villesdxssearch" ).autocomplete({
		minLength:3,
      	source: availableTags
    });
    $( "#villesaxssearch" ).autocomplete({
		minLength:3,
      	source: availableTags
    });
  });