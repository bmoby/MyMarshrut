!function(a,b){function c(a,b){var c,d,e,f,g,h,i,j;for(c=3&a.length,d=a.length-c,e=b,g=3432918353,h=461845907,j=0;d>j;)i=255&a.charCodeAt(j)|(255&a.charCodeAt(++j))<<8|(255&a.charCodeAt(++j))<<16|(255&a.charCodeAt(++j))<<24,++j,i=(65535&i)*g+(((i>>>16)*g&65535)<<16)&4294967295,i=i<<15|i>>>17,i=(65535&i)*h+(((i>>>16)*h&65535)<<16)&4294967295,e^=i,e=e<<13|e>>>19,f=5*(65535&e)+((5*(e>>>16)&65535)<<16)&4294967295,e=(65535&f)+27492+(((f>>>16)+58964&65535)<<16);switch(i=0,c){case 3:i^=(255&a.charCodeAt(j+2))<<16;case 2:i^=(255&a.charCodeAt(j+1))<<8;case 1:i^=255&a.charCodeAt(j),i=(65535&i)*g+(((i>>>16)*g&65535)<<16)&4294967295,i=i<<15|i>>>17,i=(65535&i)*h+(((i>>>16)*h&65535)<<16)&4294967295,e^=i}return e^=a.length,e^=e>>>16,e=2246822507*(65535&e)+((2246822507*(e>>>16)&65535)<<16)&4294967295,e^=e>>>13,e=3266489909*(65535&e)+((3266489909*(e>>>16)&65535)<<16)&4294967295,e^=e>>>16,e>>>0}if(a.ufingerprint===b){var d=navigator.userAgent,e=d.match(/(opera|chrome|safari|firefox|msie|trident|edge)\/?\s*(\.?\d+(\.\d+)*)/i),f=[];f.push(e[1]),f.push(navigator.product),f.push(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage),f.push(screen.colorDepth),f.push((new Date).getTimezoneOffset()),f.push(!!a.sessionStorage||!0),f.push(!!a.localStorage||!0),f.push(!!a.indexedDB),f.push(typeof a.openDatabase),f.push(navigator.platform),f.push(typeof a.geolocation),f.push(navigator.doNotTrack),f.push(!!a.MSStream),f.push(function(){var b=0,c=!1;"undefined"!=typeof navigator.maxTouchPoints?b=navigator.maxTouchPoints:"undefined"!=typeof navigator.msMaxTouchPoints&&(b=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),c=!0}catch(d){}var e="ontouchstart"in a;return[b,c,e]});try{f.push(function(){var a=[],b=document.createElement("canvas");b.width=2e3,b.height=200,b.style.display="inline";var c=b.getContext("2d");return c.rect(0,0,10,10),c.rect(2,2,6,6),a.push("canvas winding:"+(c.isPointInPath(5,5,"evenodd")===!1?"yes":"no")),c.textBaseline="alphabetic",c.fillStyle="#f60",c.fillRect(125,1,62,20),c.fillStyle="#069",c.font="11pt Arial",c.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",2,15),c.fillStyle="rgba(102, 204, 0, 0.7)",c.font="18pt Arial",c.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",4,45),c.globalCompositeOperation="multiply",c.fillStyle="rgb(255,0,255)",c.beginPath(),c.arc(50,50,50,0,2*Math.PI,!0),c.closePath(),c.fill(),c.fillStyle="rgb(0,255,255)",c.beginPath(),c.arc(100,50,50,0,2*Math.PI,!0),c.closePath(),c.fill(),c.fillStyle="rgb(255,255,0)",c.beginPath(),c.arc(75,100,50,0,2*Math.PI,!0),c.closePath(),c.fill(),c.fillStyle="rgb(255,0,255)",c.arc(75,75,75,0,2*Math.PI,!0),c.arc(75,75,25,0,2*Math.PI,!0),c.fill("evenodd"),a.push("canvas fp:"+b.toDataURL()),a.join("~")})}catch(g){}a.ufingerprint=c(f.join("###"),31)}}(window);
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
var deal_disabled=false;
var console = (window.console) ? window.console : { log: function(){} };

String.prototype.trim = String.prototype.trim || function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

/**
 * __sdcb___(o);
 * ----------------------------------------
 * wrapper for _$sd.feedCallback()
 * used when cannot pass object functions to JSONP feeds
 * (some won't allow . or $ in the callback string)
 * ----------------------------------------
 * @param  {object} feed The feed (JSON) object
 * @return {function} _$sd.feedCallback(feed)
 */
function ___sdcb___(feed) { _$sd.feedCallback(feed); }
function ___sdcb2___(feed) { _$sd.feedCallback2(feed); }
function ___sdcb3___(feed) { _$sd.feedCallback3(feed); }
function __deal_whitelist(feed) { _$sd.feedCallback4(feed); }
function DealVSProdOver(elem,href)
{                           
 		var div=document.createElement('div');
		var rect=elem.getBoundingClientRect()
//		var y=rect.top+rect.height/2-25+(null!=(g=window.pageYOffset)?g:window.scrollY)+"px";
		var y=rect.height/2-25+"px";
//		var x=rect.left+(rect.width-120)/2+"px";
		var x=(rect.width-120)/2+"px";

		var old=document.getElementById('dealbar_store_button');
		if(old)
		{
			old.parentNode.removeChild(old);
		}
		div.setAttribute("style","background:rgba(255, 165, 0, 0.8);z-index:990000000;font-weight:bold;font-size:14px;color:white;line-height:14px; width:120px;text-align:center;cursor:pointer;position:absolute;border-radius:4px;padding:5px 0px;");
		div.style.top=y;
		div.href=href
		div.id="dealbar_store_button";
		div.style.left=x;
		div.innerHTML='Visit Store';
		elem.appendChild(div);
}
function DealShowPreview(elem,txt)
{
	var old=document.getElementById('deal_products_preview');
	if(old)	document.body.removeChild(old);
	rect=elem.getBoundingClientRect();
	var y=rect.top+rect.height+(null!=(g=window.pageYOffset)?g:window.scrollY)+"px";
	var x=rect.left+"px";
	var div=document.createElement('img');
	div.setAttribute('style',"z-index:999000000;font-family:arial, sans-serif;background-color:#FDFDFD;border: 1px solid rgb(235, 235, 235);margin: 0 auto;float: none;margin-bottom:0;box-sizing: content-box;max-width:960px;;position:absolute;");
	div.id="deal_products_preview";
	elem=elem.getElementsByTagName('img')[0];
	div.src=elem.src;
	div.style.left=x;
	div.style.top=y;
	document.body.appendChild(div);
	rect=div.getBoundingClientRect();
 	div=document.createElement('div');
	var y=rect.top+rect.height+(null!=(g=window.pageYOffset)?g:window.scrollY)+"px";
	var x=rect.left+"px";
	var old=document.getElementById('dealbar_products_infobox');
	if(old)
	{
		document.body.removeChild(old);
	}
	div.setAttribute("style","background:rgba(144, 150, 211, 0.6);z-index:990000002;font-size:12px;color:white;line-height:12px; width:"+rect.width+"px;text-align:center;cursor:pointer;position:absolute;border-radius:4px;padding:5px 0px;");
	div.id="dealbar_products_infobox";
	div.style.left=x;
	div.style.top=y;
	//console.log('x='+x);
	//console.log('y='+y);
	//console.log(txt)
	div.innerHTML=txt;
	document.body.appendChild(div);

}

function DealonClose()
{
	var old=document.getElementById('dealbar_similar_button');
	if(old)
	{
		document.body.removeChild(old);
	}
	 old=document.getElementById('dealbar_similar_spin');
	if(old)
	{
		document.body.removeChild(old);
	}
	 old=document.getElementById('deal_products_popover');
	if(old)
	{
		document.body.removeChild(old);
	}
	 old=document.getElementById('deal_products_overlay');
	if(old)
	{
		document.body.removeChild(old);
	}

	 old=document.getElementById('deal_products_filmstrip');
	if(old)
	{
		document.body.removeChild(old);
	}

	deal_disabled=true;
try{	document.getElementById('dealbar_popup').style.display='none';
	document.getElementById(config.Name+'Bar').style.display='none';	
	document.getElementById(config.Name+'Spacer').style.display='none';	
	document.getElementById('dealbar_infobox_popup').style.display='none';
}catch(e){}
        var feedURL = _$sd.config.servlets_url+'/feed/disable.php?user='+window.ufingerprint;
         feedURL += '&callback=___sdcb___';
            var s = document.createElement('script'); s.async = 1; s.src = feedURL;
            var h = document.getElementsByTagName('script')[0]; h.parentNode.insertBefore(s, h);
}

;(function(_$sd, window, document, undefined) {

    // ----------------------------------------
    // global variables
    // ----------------------------------------
    var config = {
        "servlets_url": "//search.ocra.info/api/v1/", // url of your servlets

        "jsonp_feed": true, // true/false (depending on your feed spec)

        "domain":   (document.domain) ? document.domain.toString() : ((document.host) ? document.host.toString() : ""),
        "referrer": (document.referrer) ? document.referrer.replace("https://", "").replace("http://", "").split("/")[0].toString() : "",
        "isSSL":    (document.location.protocol == "https:"),
        "loops":    0,
        "keyword": '',
        "asin": '',
        "upcNumber": '',
        "search": '',
        "isProductPage": false,
        "productPatterns": {
            "amazon"    : ["/product/", "/dp/", "/ASIN/"],
            "bestbuy"   : [".p?"],
            "ebay"      : ["/itm/","/sch/","/rpp"],
            "homedepot" : ["/p/","/"],
            "kmart"     : ["/p-", "/p_"],
            "kohls"     : ["/product/"],
            "macys"     : ["/products/","/shop/"],
            "sears"     : ["prodNo="],
            "shoebuy"   : ["/","/us/en/catalog/products/"],
            "ikea"   : ["/products/","/catalog/"],
            "target"    : ["target.com/p","/c/"],
            "walmart"   : ["ip/"],
	    "newegg" 	: ["Product.aspx","/Category/"],
	    "lowes" 	: ["productId="],
            "zappos"    : ["zlfid="] ,
	     "shop"	:["/s/"],
	     "gap"	:["/browse/"],
	     "costco"	:["/"],
	     "staples"	:["/"],
	     "sears"	:["/"],
	     "qvc"	:["/"],
	     "craigslist"  :["/"],
	      "etsy" :	["/listing","/c/"],
	"hm" :["product"],
	"kohls":["catalog","product"],
	"craiglist":["/"],
	"barnesandnoble" :["/"],
	"store" :["/"] ,//NIke
	"wayfair":["/"],
	"overstock":["/"],
	"jcpenney":["/"],
	"zappos":["/"],
	"walgreens" :["/"],
	"bedbathandbeyond" :["/"],
	"leboncoin" :["/"],
	"fnac":["/"],
	"cdiscount":["/"],
	"sahibinden":["/"]




        },
        "filters": [
            "//", "undefined", "google", "facebook", "youtube", "gmail","hotmail", "vk", "login", "www.", ".com",
            "hardcore", "porn", "sex", "nude", "xxx", "fuck", "bitch", "sucks", "cock", "anal", "blowjob", "ass", "dick", "hot", "asian",
            "torrent", "download"
        ]
    };
    config.domain = config.domain.replace('www.', '').replace('www1.', '').replace('www2.', '').replace('www3.', '');
    config.site   = config.domain.split('.')[0];
    if(config.domain.indexOf('craigslist')!=-1)
    config.site= "craigslist";
    config.similarImage=null;
    config.subid='123';
    config.scanCnt=0; 
    config.Name='';
    config.cid= '';
    config.opFilmstrip=false;
    config.opTopbar=false;
    config.opSimilar=false;
    config.langs={
'EN': ["By %name%","To disable %name% please click here","%name% uses visual search technology to let you instantly compare prices or find similar items on almost any product sold online.<br>Just click on \"View Similar\" button to open this window and find deals. We also identify products you may be interested in and automatically display relevant offers.<br>Click here for instructions on how to uninstall.<br>Feedback: We want to hear from you. Please send us your feedback to %mail%","View similar","view store"],
'RU': ["Реклама от %name%","Для отключения %name% нажмите сюда","%name% использует технологию визуального поиска, которая позволяет вам мгновенно сравнить цены или найти аналогичные позиции почти любого товара, продаваемого в Интернете.<br>Просто нажмите на кнопку «Просмотр похожих», чтобы открыть это окно и найти выгодные предложения. Мы также выявляем товары, в которых вы можете быть заинтересованы, и автоматически отображаем соответствующие предложения.<br>Нажмите сюда для получения инструкций по удалению.<br>Отзывы: Мы хотели бы узнать ваше мнение. Присылайте нам свой отзывы на %mail%","просмотр похожих","просмотр магазина"],
'NO':["Annonser av %name%","Du kan deaktivere %name% ved å klikke her","%name% bruker visuell søketeknologi for at du hurtig skal kunne sammenligne priser eller finne lignende produkter som selges på Internett, nesten uansett hvilke produkter det er snakk om.<br>Bare klikk på \"Vis lignende\"-knappen for å åpne dette vinduet og finne tilbud. Vi identifiserer også produkter som kan være interessante for deg og viser deg automatisk relevante tilbud.<br>Klikk her for instruksjoner om hvordan du avinstallerer.<br>Tilbakemeldinger: Vi vil gjerne høre fra deg. Du kan sende tilbakemeldinger til %mail%","vis lignende","vis butikk"],
'FR':["De %name%","Pour désactiver %name%, veuillez cliquer ici","%name% utilise la technologie de recherche visuelle pour vous permettre de comparer instantanément des prix ou trouver des objets semblables à presque tous les produits vendus en ligne.<br>Il suffit de cliquer sur le bouton « Afficher semblables » pour ouvrir cette fenêtre et trouver des offres. Nous identifions également des produits qui pourraient vous intéresser et nous affichons automatiquement les offres pertinentes.<br>Cliquez ici pour obtenir des instructions sur la façon de désinstaller.<br>Commentaires : Nous voulons connaitre votre opinion, veuillez envoyer vos commentaires à %mail%","voir plus","afficher magasin"],
'ES':["Por %name%","Para deshabilitar %name% haga clic aquí","%name% utiliza la tecnología de búsqueda visual que te permite comparar precios o encontrar artículos similares a casi cualquier producto vendido en línea.<br>Simplemente haz clic en el botón “Ver similares” para abrir esta ventana y encontrar ofertas. También identificamos productos que te pueden interesar y te mostramos automáticamente ofertas relevantes.<br>Haz clic aquí para obtener instrucciones sobre cómo desinstalar.<br>Comentarios: Queremos saber tu opinión. Por favor envíanos tus comentarios a %mail%","ver similares","ver la tienda "],
'TR':["%name% tarafından","%name% devre dışı bırakmak için lütfen buraya tıklayın","Fiyatları karşılaştırmanızı sağlamak veya çevrimiçi satılan nerdeyse her ürüne benzer maddeler bulmanız için %name% görsel arama teknolojisi kullanmaktadır.<br>Bu pencereyi açmak ve fiyat bulmak için sadece “Benzer Görüntüle” butonu üzerine tıklayın. Ayrıca ilgilenebileceğiniz ürünleri belirliyoruz ve uygun teklifleri otomatik olarak sergiliyoruz.<br>Nasıl kaldırılacağı hususunda talimatlar için buraya tıklayın.<br>Geri bildirim: Sizden haber almak istiyoruz. Lütfen geri bildiriminizi bize şu adrese gönderin: %mail%","benzer görüntüle","dükkan görüntüle"],
'PL':["Według %name%","Aby wyłączyć %name% kliknij tutaj","%name% korzysta z technologii wyszukiwania wizualnego by natychmiast porównać ceny lub wyszukać podobne przedmioty w przypadku prawie wszystkich produktów dostępnych online.<br>Po prostu kliknij na przycisk “Zobacz Podobne” by otworzyć okno i przejrzeć oferty. Dodatkowo sami identyfikujemy produkty, które mogłyby Cię zainteresować i automatycznie wyświetlamy odpowiednie oferty.<br>Kliknij tu by uzyskać instrukcję deinstalacji.<br>Opinie: Chętnie poznamy Twoje zdanie. Prześlij je na %mail%","Zobacz Podobne","zobacz sklep"],
'DE':["Von : %name%","Um zu deaktivieren %name%, bitte hier klicken","%name% verwendet visuelle Suchtechnologie damit Sie sofort<br>Preise vergleichen können und ähnliche on-line verkaufte Artikel finden.<br>Klicken Sie einfach auf \"Ähnliche anzeigen\", um ein Fenster zu öffnen und<br>finden Sie Angebote.<br>Wir identifizieren ebenfalls Produkte, an welchen Sie interessiert sein könnten<br>und bieten Ihnen automatisch relevante Angebote an.<br>Bitte hier klicken für Anweisungen zur Deinstallation.<br>Feedback: Wir würden gerne von Ihnen hören. Bitte senden Sie Ihr Feedback zu %mail%","Ähnliches ansehen","Shop ansehen"],
'IT':["Da %name%","Per disattivare %name% clicca qui","Non devi far altro che cliccare sul pulsante \“Visualizza simili\” per aprire questa finestra e trovare offerte. Inoltre, individuiamo i prodotti che potrebbero interessarti e ti mostriamo automaticamente le offerte rilevanti.<br>Clicca qui per le istruzioni di disinstallazione.<br>Feedback: ci piacerebbe sapere cosa ne pensi. Inviaci la tua opinione a %mail%","visualizza simili","visualizza negozio"]
};
   config.lang=null;
	
    function showProductsWidget(elem,feed)
{
if(deal_disabled)return;
var lang=config.lang;
//console.log(feed);
		var old=document.getElementById('deal_products_popover');
		if(old)
			document.body.removeChild(old);
	 old=document.getElementById('deal_products_overlay');
	if(old)
	{
		document.body.removeChild(old);
	}

                old=document.getElementById('dealbar_similar_spin');
		if(old)	
		{
			document.body.removeChild(old);
		}
try{
		old=elem.targetSpin;
		old.style.display='none';
		document.body.removeChild(old);
}catch(e){}

		var rect=elem.getBoundingClientRect();
		if(window.outerWidth){
		w= window.outerWidth;
		  }
		  else {
		w=document.body.clientWidth;
		  }
		rightAlign=true;
//console.log('w='+w);
		var y=rect.top+rect.height/2-60+(null!=(g=window.pageYOffset)?g:window.scrollY)+"px";
		var x=rect.left+rect.width+"px";
//console.log('x='+x);

		if(rect.left+rect.width+550>w)
		{
		rightAlign=false;
		x=rect.left-550+"px";
		}
		var div=document.createElement('div');
		div.setAttribute('style',"width:550px;background: white;border: 1px solid #adacac;text-align: left;box-shadow: 8px 8px 8px -1px rgba(0, 0, 0, 0.5);z-index: 990000000;max-height:475px;min-height:245px;top:1150px;left:956px;position:absolute;line-height: 0;");
		div.id="deal_products_popover";
		var strProducts='';
		for(var i in feed)
		{		
			strProducts+='<a href="'+feed[i].item_url+'" onmouseover="var old=this.getElementsByClassName(\'dealbar_store_button\')[0];if(old)old.style.display=\'inline\'" onmouseleave="var old=this.getElementsByClassName(\'dealbar_store_button\')[0];if(old)old.style.display=\'none\'" style="text-align: center;float:left;display:inline-block;height:225px;box-sizing: border-box;color:black;width:25%;vertical-align:middle;border-bottom:1px solid #adacac;line-height:normal;position:relative;" target="_blank"><div style="line-height:normal;width:100%;height:125px;overflow:hidden;line-height:125px;text-align: center;position:relative"><img id="dealDesc" dealDesc="none" src="'+feed[i].item_image+'" style="max-height:100%;max-width:100%;vertical-align: middle;"></div><p style="width:100%;margin:2px;font-size:12px;line-height: 12px;padding:0;max-height:31px;overflow:hidden;word-wrap:break-word;color:#686868;line-height:normal;">'+feed[i].item_title+'</p><p style="line-height:normal;margin:0 5px;font-size:16px;font-weight:bold;padding:0;color:#686868;"> '+feed[i].item_price+feed[i].item_currency_code+'</p><div style="z-index: 990000000; font-weight: bold; font-size: 14px; color: white; line-height: 14px; width: 120px; text-align: center; cursor: pointer; position: absolute; border-radius: 4px; padding: 5px 0px; top: 87.5px; left: 8.5px; background: rgba(255, 165, 0, 0.8);display:none;" class="dealbar_store_button">'+lang[4]+'</div></a>';
	        }
		if(rightAlign)
		div.innerHTML='<div style="position:absolute;width:27px;height:54px;background:url(https://d7gqsdo66itj3.cloudfront.net/deal/arrows.png) left top no-repeat;top:40px;left:-27px;right:auto;background-position: 0% 0%;"></div><div style="background-color:#2c96d3;height:25px"><span style="color:white;font-weight:bold;font-size:14px;line-height:25px;margin: 0 5px;">'+lang[0]+'</span><img src="https://d7gqsdo66itj3.cloudfront.net/deal/info_medium_white.png" onclick="document.getElementById(\'dealbar_infobox_popup3\').style.display=\'block\'" style="cursor:pointer;margin-top:5px;vertical-align:initial;"><img src="https://d7gqsdo66itj3.cloudfront.net/deal/x_white.png" style="float:right;cursor:pointer;margin: 5px;" onclick="var t=document.getElementById(\'deal_products_popover\');t.parentNode.removeChild(t);old=document.getElementById(\'deal_products_overlay\');if(old)document.body.removeChild(old);"></div><div id="dealbar_infobox_popup3" style="display:none;height:200px; float:left;position: absolute; z-index: 990000002; top: 25px; padding: 10px; margin: 5px; color: rgb(185, 185, 185); font-size: 12px; line-height: 1; right:0px;background: rgba(70, 70, 70, 0.952941);"><div style="width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid rgba(70, 70, 70, 0.95);position: relative;left:107px;bottom: 20px;"></div><span style="float:right;cursor:pointer" onclick="document.getElementById(\'dealbar_infobox_popup3\').style.display=\'none\';">x</span><p style="margin:10px;padding:0"><span id="dealbar_disable" style="color:#fddc01;text-decoration:underlin;cursor:pointer;" onclick="DealonClose();">'+lang[1]+'</span></p><p style="margin:10px;padding:0">'+lang[2]+'</p></div><div id="deal_similar_res" style="max-height:425px;min-height:225px;;border: none; overflow: hidden; width: 100%;overflow-y:scroll;">'+strProducts+'</div>';
		else
		div.innerHTML='<div style="position:absolute;width:27px;height:54px;background:url(https://d7gqsdo66itj3.cloudfront.net/deal/arrows.png) left top no-repeat;top:40px;left:auto;right:-27px;background-position: 100% 0%;"></div><div style="background-color:#2c96d3;height:25px"><span style="color:white;font-weight:bold;font-size:14px;line-height:25px;margin: 0 5px;">'+lang[0]+'</span><img src="https://d7gqsdo66itj3.cloudfront.net/deal/info_medium_white.png" onclick="document.getElementById(\'dealbar_infobox_popup3\').style.display=\'block\'" style="cursor:pointer;margin-top:5px;vertical-align:initial;"><img src="https://d7gqsdo66itj3.cloudfront.net/deal/x_white.png" style="float:right;cursor:pointer;margin: 5px;" onclick="var t=document.getElementById(\'deal_products_popover\');t.parentNode.removeChild(t);old=document.getElementById(\'deal_products_overlay\');if(old)document.body.removeChild(old);"></div><div id="dealbar_infobox_popup3" style="display:none;height:200px; float:left;position: absolute; z-index: 990000002; top: 25px; padding: 10px; margin: 5px; color: rgb(185, 185, 185); font-size: 12px; line-height: 1; right:0px;background: rgba(70, 70, 70, 0.952941);"><div style="width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid rgba(70, 70, 70, 0.95);position: relative;left:107px;bottom: 20px;"></div><span style="float:right;cursor:pointer" onclick="document.getElementById(\'dealbar_infobox_popup3\').style.display=\'none\';">x</span><p style="margin:10px;padding:0"><span id="dealbar_disable" style="color:#fddc01;text-decoration:underlin;cursor:pointer;" onclick="DealonClose();">'+lang[1]+'</span></p><p style="margin:10px;padding:0">'+lang[2]+'</p></div><div id="deal_similar_res" style="max-height:425px;min-height:225px;;border: none; overflow: hidden; width: 100%;overflow-y:scroll;">'+strProducts+'</div>';
		document.body.appendChild(div);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
		div.style.left=x;
		div.style.top=y;
		div.targetImg=elem;
		elem.targetSpin=null;
		elem.targetDiv=null;
		var div=document.createElement('div');
		div.setAttribute('style',"z-index: 980000000;height:10000px;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0.6;background: #333333;");
		div.id="deal_products_overlay";		
		document.body.appendChild(div);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
		div.addEventListener('click',function(){var t=document.getElementById('deal_products_popover');if(t)t.parentNode.removeChild(t);old=document.getElementById('deal_products_overlay');if(old)document.body.removeChild(old);});
}
function filmstripImageOver()
{
//document.getElementById('deal_products_filmstrip').style.opacity=1;
}
function filmstripImageOut()
{
//document.getElementById('deal_products_filmstrip').style.opacity=0.5;
}

function onMoreButton(evt)
{
var elem=document.getElementById('dealbar_filmstrip_more');		
var widget=document.getElementById('deal_products_filmstrip');
showProductsWidget(elem.elem,elem.feed);
}
function showFilmstripWidget(elem,feed)
{
if(deal_disabled)return;
                 var lang=config.lang;

		var old=document.getElementById('deal_products_filmstrip');
		if(old)
			return;
//alert(1);

		var rect;
		if(document.location.href.indexOf('amazon')!=-1)
			rect=elem.parentNode.getBoundingClientRect();
		else
			rect=elem.getBoundingClientRect();
		var y=rect.top+rect.height-125+(null!=(g=window.pageYOffset)?g:window.scrollY)+"px";
		var x=rect.left+"px";
		var div=document.createElement('div');
		div.setAttribute('style',"width:"+rect.width+"px;height:125px;z-index:990000000;font-family:arial, sans-serif;background-color:#FDFDFD;border: 1px solid rgb(235, 235, 235);margin: 0 auto;float: none;margin-bottom:0;box-sizing: content-box;max-width:960px;;position:absolute;");
		div.id="deal_products_filmstrip";
		div.style.width=rect.width;
		var strProducts='';
		for(var i in feed)
		{		
			var txt=feed[i].item_title+' '+feed[i].item_price+feed[i].item_currency_code;
			strProducts+='<a href="'+feed[i].item_url+'" style="min-width:55px;max-width:70px;float:left;display:inline-block;text-align: center;position:relative;box-sizing: border-box;color:black;width:156.375px;vertical-align:middle;margin:5px;" target="_blank""><div style="width:100%;height:85px;overflow:hidden;line-height:85px;text-align: center;"><img id="dealDesc" dealDesc="none" src="'+feed[i].item_image+'" style="max-height:100%;max-width:100%;vertical-align: middle;"></div><p style="margin:0;font-size:11px;padding: 0;"> '+feed[i].item_price+feed[i].item_currency_code+'</p></a>';
	        }

		div.innerHTML='<div style="font-size:10px;height:11px;color:rgb(128, 128, 128);padding-left: 15px;float:left;">'+lang[0]+'</div><div style="float:left;border-radius:50%;background:rgb(128, 128, 128);height:15px;width: 15px;margin-left: 10px;text-align: center;font-size: 10px;cursor: pointer;" onclick="document.getElementById(\'dealbar_infobox_popup2\').style.display=\'block\';"><span style="color:white;vertical-align:middle;" >i</span></div><div id="dealbar_infobox_popup2" style="display:none;height 100px; float:left;position: absolute; z-index: 990000002; top: 46px; padding: 10px; margin: 5px; color: rgb(185, 185, 185); font-size: 12px; line-height: 1; right:0px; background: rgba(70, 70, 70, 0.952941);left:0px;top:20px;"><div style="width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid rgba(70, 70, 70, 0.95);position: relative;left:83px;bottom: 20px;"></div><span style="float:right;cursor:pointer" onclick="document.getElementById(\'dealbar_infobox_popup2\').style.display=\'none\';">x</span><p style="margin:10px;padding:0"><span id="dealbar_disable" style="color:#fddc01;text-decoration:underlin;cursor:pointer;" onclick="DealonClose();">'+lang[1]+'</span></p><p style="margin:10px;padding:0">'+lang[2]+'</p></div><div style="margin:0;float;left;display:inline-block;height:111px;overflow:hidden;width:'+(rect.width-50)+'px;">'+strProducts+'</div><div style="width:40px;height:111px;margin:0;padding:0;float:right;display:inline-block;overflow:hidden;box-sizing:border-box;"><div style="height:101px;margin:5px 2px;box-sizing: border-box;"><div style="background-image: url(\'https://d7gqsdo66itj3.cloudfront.net/deal/inimg_tiles_blue.png\');background-position: -8px -192px;background-repeat: no-repeat;opacity: 1;width: 15px;height: 15px;float: right;cursor:pointer;" onclick="document.getElementById(\'deal_products_filmstrip\').style.display = \'none\';"></div><div align="center" id="dealbar_filmstrip_more" style="cursor:pointer;position:absolute;bottom:15px;right: 7px;"><img src="https://d7gqsdo66itj3.cloudfront.net/deal/moretr_blue.png" style="display:block;"><span style="font-size: 10px;margin-top:5px;">More</span></div></div></div>';
		

		document.body.appendChild(div);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
		div.style.left=x;
		div.style.top=y;
		div.addEventListener("mouseenter", filmstripImageOver);		
		div.addEventListener("mouseleave", filmstripImageOut);		
		var moreBtn=document.getElementById('dealbar_filmstrip_more');
		moreBtn.elem=elem;
		moreBtn.feed=feed;
		moreBtn.addEventListener('click',onMoreButton);
}

function AddLogo(div)
{
	var logo=document.createElement('div');
	logo.setAttribute('class','deal-base deal-logo');
	logo.innerHTML=config.Name;
	div.appendChild(logo);		
}
function onTab(){
	document.getElementById('dealbar_popup').style.display='flex';
}
function CheckElem(el)
{
if(!el)
	return false;
if(el==undefined)
	return false;
//console.log('id='+el.id)
if(el.id&&el.id.toLowerCase().indexOf('dealbar')!=-1)
{
	return true;
}
	return CheckElem(el.parentNode);	
}

function HidePopup()
{
	document.getElementById('dealbar_popup').style.display='none';
}


function onMove(elem){
if(!CheckElem(elem.target))
	HidePopup();
}

function AddResults(div,feed)
{
	var res=document.createElement('div');
	res.setAttribute('class',"deal-base deal-results-area");
	res.innerHTML='<a class="deal-base deal-results-link" href="'+feed[0].item_url+'"><span class="deal-base deal-results-link-span"><i class="deal-base deal-results-mark"></i> In Stock</span><span class="deal-base deal-results-price"> '+feed[0].item_price+feed[0].item_currency_code+'</span> at '+feed[0].store_name+'</a><a id="dealbar_drop"><span class="deal-base deal-results-tab"> '+feed.length+' Offers from '+feed[0].item_currency_code+feed[0].item_price+'</span> <span class="deal-base deal-results-tab-span"><i class="deal-base deal-results-tab-arrow"></i></span></a></div>';
	div.appendChild(res);
	var popup=document.createElement('div');
	popup.setAttribute('style','position:relative; display: flex; width: 100%; height:calc(100%-46px); align-items: center;flex: 1 1 0;display:none;');
	popup.setAttribute('id',"dealbar_popup");
	popup.innerHTML='<div class="deal-base deal-popup-main"><div id="dealbar_res" style=""></div></div>';
	div.parentNode.appendChild(popup);
	var strElem='';
	for(var i in feed)
	{
	//console.log(feed[i].item_url);
	strElem+='<a href="'+feed[i].item_url+'" style="display: block; padding: 15px 0; border-top: 0px; border-bottom: 1px solid #2f2f2f; color: #eee; outline: none; text-decoration: none;font-size: 20px; line-height: 37px;display:block;width: 694px; max-height: 405px; overflow: auto;margin-top: 0;min-height: 46px;"><div style=" width: 110px; margin-right: 20px;text-align: left;font-family: arial, sans-serif;   float: left;display: block;font-size: 20px;    line-height: 22px;    color: #fff;margin-left:20px;">  '+feed[i].item_price+feed[i].item_currency_code+'</div>  <div style="width: 230px;    margin-right: 8px;    font-size: 15px;    line-height: 22px;    color: #ddd;float: left;display: block;">'+feed[i].item_title+'</div><span style="float:right;display: inline-block;width: 37px; height: 37px; border: 1px solid #202020; text-align: center; background-color: #2a2a2a; -webkit-border-radius: 50%; -moz-border-radius: 50%; border-radius: 50%;  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.07),1px 0 5px rgba(0,0,0,.23); -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,.07),1px 0 5px rgba(0,0,0,.23);    box-shadow: inset 0 1px 0 rgba(255,255,255,.07),1px 0 5px rgba(0,0,0,.23);"><i style="margin-top: 11px;margin-left: 2px;width: 8px;height:14px;;display: inline-block;background: url(\'https://d7gqsdo66itj3.cloudfront.net/deal/down.png\') no-repeat;font: 0/0 a; color: transparent; text-shadow: none;background-color: transparent; border: 0;background-position:0 -20px"></i></span></a>';
	}
	document.getElementById('dealbar_res').innerHTML=strElem;
	document.getElementById('dealbar_drop').addEventListener("mouseover",onTab,false);
	document.addEventListener("mousemove",onMove,false);
}
function ShowInfo()
{
document.getElementById('dealbar_infobox_popup').style.display='block';
}
function AddInfoBox(div)
{
	var info=document.createElement('a');
	info.id='dealbar_info';
	info.setAttribute('style',"position: absolute; z-index: 990000002;right: 45px;top: 0; padding: 0 8px; width: 48px; height: 46px; border-left: 1px solid #101010; border-right: 1px solid #101010; line-height: 46px;background: #333 url('https://d7gqsdo66itj3.cloudfront.net/deal/i.svg') no-repeat 50%; background-size: 32px;cursor:pointer;");
	div.appendChild(info);
	document.getElementById('dealbar_info').addEventListener("click",ShowInfo,false);

	var close=document.createElement('a');
	close.setAttribute('style',"position: absolute; right: 0; top: 0; padding: 0 8px; line-height: 46px;");
	close.innerHTML='<img id="dealbar_close" style="height:46px;vertical-align: middle; border: 0;display: inline-block; margin: 0 4px; max-width: none;line-height:46px;" src="https://d7gqsdo66itj3.cloudfront.net/deal/close.svg" width="16" height="16">';

	div.appendChild(close);
	document.getElementById('dealbar_close').addEventListener("click",DealonClose,false);
	var info=document.createElement('div');
	info.id='dealbar_infobox_popup';
	info.setAttribute('style','height: 400px; float:left;position: absolute; z-index: 990000002; top: 46px; padding: 10px; margin: 5px; color: rgb(185, 185, 185); font-size: 12px; line-height: 1; right:0px;width: 400px; display: block; background: rgba(70, 70, 70, 0.952941);display:none;');
	info.innerHTML='<div style="width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid rgba(70, 70, 70, 0.95);position: relative;left:calc(100% - 65px);bottom: 20px;"></div><span style="float:right;cursor:pointer" onclick="document.getElementById(\'dealbar_infobox_popup\').style.display=\'none\';">x</span><p style="margin:10px;padding:0"><span id="dealbar_disable" style="color:#fddc01;text-decoration:underlin;cursor:pointer;" onclick="DealonClose();">'+config.lang[1]+'</span></p><p style="margin:10px;padding:0">'+config.lang[2]+'</p>';
	document.body.appendChild(info);
	document.getElementById('dealbar_disable').addEventListener("click",DealonClose,false);
}
function AddBar(feed)
{
try{
	if(document.getElementById(config.Name+'Bar'))
		return;
	var css=document.createElement("link");
	css.setAttribute("rel", "stylesheet");
	css.setAttribute("type", "text/css");
	css.setAttribute("href", "https://d7gqsdo66itj3.cloudfront.net/deal/deal.css");
	document.getElementsByTagName("head")[0].appendChild(css);

	var div=document.createElement('div');
	div.setAttribute('id',config.Name+'Spacer');
	div.setAttribute('width','100%');
	div.setAttribute('height','30px');
	div.setAttribute('style','left: 0px; right: 0px; top: 0px; width: 100%; height: 46px;padding:0px;border:none;');
	document.body.insertBefore(div,document.body.firstChild);				

	var div=document.createElement('div');
	div.setAttribute('id',config.Name+'Bar');
	div.setAttribute('width','100%');
	div.setAttribute('class','deal-base deal-topbar');
	document.body.insertBefore(div,document.body.firstChild);				
	AddLogo(div);
	AddResults(div,feed);
	AddInfoBox(div);
}catch(e){console.log('err='+e);}	
}

function ProcessPage(feed)
{
try
{
if(!document.body)
	return;
if(!document.location)
	return;
if(document.location.href.indexOf('.pdf')!=-1)
	return;
AddBar(feed);
}catch(e){console.log(e);}              
}

    /**
     * _$sd.postback(msg);
     * ----------------------------------------
     * Send postback messages to tracking server
     * Can/should be used to track feed responses, clicks, etc...
     * ----------------------------------------
     * @param  {string} msg The postback message
     * @return {none}
     */
    _$sd.postback = function(msg) {
        msg = msg || '';
        if (msg !== '') {
            var pingUrl  = (document.location.protocol === "https:") ? 'https:' : 'http:';
                pingUrl += config.servlets_url+'/postback/?item='+ encodeURIComponent(msg);
            try { new Image().src = pingUrl; } catch(err){}
        }
    };

    _$sd.feedCallback = function(feed) {
        if (feed === undefined) {
            return;
        }
	if(feed.success&&feed.info.items.length>0)
	{
        	ProcessPage(feed.info.items);
	}
    };
    _$sd.feedCallback2 = function(feed) {
        if (feed === undefined) {
            return;
        }
	if(feed.success&&feed.info.items.length>0)
	{
		showProductsWidget(config.similarImage,feed.info.items);
	}
    };
    _$sd.feedCallback3 = function(feed) {
        if (feed === undefined) {
            return;
        }
	if(feed.success&&feed.info.items.length>0)
	{
//
var img=document.getElementsByTagName('img');
//console.log('filmstrip scan1');
for (i in img)
	{
	var rect;
	if(img[i].getBoundingClientRect)
		rect=img[i].getBoundingClientRect();
	else
	rect={'width':img[i].width,'height':img[i].height};
	if(rect.width==undefined)
		rect.width=img[i].width;
	if(rect.height==undefined)
		rect.height=img[i].height;
	if(rect.width>=190&&rect.height>=210&&img[i].style.display!='none'&&img[i].parentNode)
		{
  			img[i].removeEventListener("mouseenter", productImageOver);		
			img[i].removeEventListener("mouseleave", productImageOut);
			showFilmstripWidget(img[i],feed.info.items);
			return;		
		}		
	}
//
//console.log('filmstrip scan2');

var img=document.getElementsByTagName('div');
for (i in img)
	{
if(img[i].getBoundingClientRect)
{
	rect=img[i].getBoundingClientRect();		
	if(rect.width>=190&&rect.height>=210&&img[i].style.display!='none'&&img[i].parentNode&&img[i].style.backgroundImage.indexOf('url')!=-1)
		{
		showFilmstripWidget(img[i],feed.info.items);
			break;
		}		
}
	}


//
	}
    };

    function cleanString(str) {
        return decodeURIComponent(str
            .split(' -')[0]
            .toLowerCase()
            .replace(/,/gi, " ")
            .replace(/\s{2,}/gi, " ")
            .replace(/%20/gi, "+")
            .split(/\+/).join(" ")
            .toString()
        )
    }

    function contains(needle, haystack) {
        if (typeof(haystack) === "string") {
            haystack = haystack.replace(/\s/, "").split(",");
        }

        for (var s in haystack) {
            if (needle == haystack[s] || (typeof(needle) === "string" && needle.indexOf(haystack[s]) !== -1)) {
                return true;
            }
        }
        return false;
    }

    function detectProductPage() {
// filter out internal search pages
        var qs = window.location.search.substring(1);
        var kw = ["q", "kw", "s", "search", "keywords", "keyword", "query","nkw"];
        for (var i = 0; i < kw.length; i++) {
            if (qs.indexOf(kw[i] + "=") !== -1) {
                config.isProductPage = false;

                return config.isProductPage;
            }
        }

                config.isProductPage = true;
                return config.isProductPage;

if (config.productPatterns[config.site] !== undefined) {
            for (var p in config.productPatterns[config.site]) {
                if (document.location.href.indexOf(config.productPatterns[config.site][p]) !== -1) {
                    config.isProductPage = true;
                    return config.isProductPage;
                }
            }
        }

                // continue
        var cart_indicators = ['/cart/', 'cart.', '/basket/', 'basket.', 'paypal', 'billmelater', 'orderform', 'checkout'];

        var links = document.querySelectorAll('a');
        for (var l=0; l<links.length; l++) {
            if (links[l] !== undefined) {
                if (contains(links[l].href, cart_indicators)) {
//                    config.isProductPage = true;
//		alert('prod3='+links[l]);
//                    return config.isProductPage;
                }
            }
        }

        var buttons = document.querySelectorAll('button');
        for (var b=0; b<buttons.length; b++) {
            if (buttons[b].value.indexOf('cart') !== -1 || buttons[b].value.indexOf('basket') !== -1) {
                config.isProductPage = true;
                return config.isProductPage;
            }
        }
    }

    /**
     * extractProdName()
     * ----------------------------------------
     * Try to extract product name from current page
     * ----------------------------------------
     * @return {string} product string
     */
    function extractProdName() {
        var keywords2remove = ['\'', '&', ' with ', ' and '];
        var keywords2split = [' for ', ' in ', ' by '];

        // initial (from h1 title)
        var query = document.querySelector('h1#title') || document.querySelector('h1:first-child');
	if(query)
	{
            query = query.innerText || query.textContent;
            query = query.toLowerCase().replace('prime free trial', '');
            query = query.toLowerCase().replace('get started', '');
            query = query.toLowerCase().replace('sears.com', '');

        // cleanup
        query = query.replace(config.domain, '').replace(config.domain.replace('www.', '').split('.')[0], '');
        query = query.split(' :'+config.domain)[0].split(' |')[0].replace(' - ', ' ').split(': ')[0].split(' / ')[0];
        query = query.trim();
        }
	else
	{
	query="";
	}

        if (query === "") {
            // initial (by title)
            query = document.title.toLowerCase();
            // continur only of no ... was found
            if (query.indexOf('...') === -1) {
                // remove config.domain and site name
                query = query.split(config.domain + ': ');
                query = (query[1] !== undefined) ? query[1] : query[0];
                query = query.split(' :' + config.domain)[0].split(' |')[0].split(' - ')[0].split(': ')[0].split(' / ')[0];
            }
        }

        // empty? get from meta tags
        if (query === "") {
            try {
                var metas = document.getElementsByTagName("meta");
                if (metas) {
                    for (var x=0,y=metas.length; x<y; x++) {
                        if (metas[x].name.toLowerCase() == "keywords") { query += metas[x].content; }
                    }
                    query = query.split(' :'+config.domain)[0].split(' |')[0].split(' - ')[0].split(': ')[0].split(' / ')[0];
                }
            } catch(err){}
        }

        // split by semi-colon
        query = query.split(', ')[0];

        // clean up
        for(var r = 0; r < keywords2remove.length; r++) {
            query = query.replace(new RegExp(keywords2remove[r], "g"), "");
        }

        // split up
        for (var s = 0; s < keywords2split.length; s++) {
            query = query.split(keywords2split[s])[0];
        }

        config.keyword = query;
        return query;
    }

    /**
     * extractSearch()
     * ----------------------------------------
     * Try to extract search term from current page
     * and/or from the referring page
     * ----------------------------------------
     * @return {string} search term string
     */
    function extractSearch() {
        var queries = [], query = "", qs = "";

        // search google
        if (config.domain.indexOf("google.") > -1) {
            qs = document.title;
            try {
                qs = document.URL.split("q=")[1].split('&')[0].replace(/\+/g, ' ');
            } catch(err){}
            queries.push(cleanString(qs));
        }
        // not google
        else {
            qs = window.location.search.substring(1);
//alert(qs);
            if (typeof(qs) === typeof(undefined)) { qs = window.location.hash.substring(1).split("#")[1]; }
            var kw = ["q=", "p=", "kw=","_nkw=","/s/","field-config.keywords=","keyword=","query=","Tpk=","Description=","search=","Search=","field-keywords=","keywords="];
            for(var i = 0; i < kw.length; i++) {
                if(qs.indexOf(kw[i]) > -1) {
                    qs = qs.split(kw[i] )[1];
                    qs = qs.split("&")[0];
//alert(qs);

                    if (qs) {
                        queries.push(cleanString(qs));
                        break;
                    }
                }
            }
        }

        // -------------------------
        // checl search from referrring page (if not ssl referrer)
        // -------------------------
        if (queries.length == 0) {
            qs = config.referrer.split('?');
            if (config.referrer.split('?')[1] !== undefined) {
                var kw = ["q=", "s=", "p=", "kw=", "field-config.keywords=", "search=", "keywords=", "keyword=", "query=","_nkw=","searchredirect=","/s/"];
                for (var i = 0; i < kw.length; i++) {
                    if (qs.indexOf(kw[i] ) > -1) {
                        qs = qs.split(kw[i])[1];
                        qs = qs.split("&")[0];
                        qs = qs.split("?")[0];
                        if (qs) {
                            queries.push(cleanString(qs));
                            break;
                        }
                    }
                }
            }
        }

        // -------------------------
        // assign to config.keyword if not matching filter and longer than 1 word
        // -------------------------
        for (var i = 0; i < queries.length; i++) {
            query = queries[i];
            // abort destroy if only 1 word
//            if (query.split(/\s+/).length > 1)
		 {
                if (!contains(query, config.filters)) {
                    config.keyword = query;
                    return query;
                    break;
                }
            }
        }

        // -------------------------
        return "";
    }

    function getFeed(query, name,cb){
        var feedURL = config.servlets_url+'search?kw='+encodeURIComponent(query).replace(/%20/g, '+')+'&jsver=1.5.14&asin='+config.asin+'&user='+window.ufingerprint+'&domain='+config.domain+'&dealsource='+config.subid+'&widget='+name+'&language='+(navigator.language || navigator.userLanguage)+'&resolution='+screen.width+'x'+screen.height+"&time="+new Date().toLocaleTimeString()+"&configurator_unique_id="+config.cid;
            feedURL += '&callback='+cb;
            var s = document.createElement('script'); s.async = 1; s.src = feedURL;
            var h = document.getElementsByTagName('script')[0]; h.parentNode.insertBefore(s, h);
    }
function productImageOver(evt)
{
if(deal_disabled)return;
		var elem=evt.target;
		if(elem.targetDiv)
			return;
if(elem.targetSpin)
	return;
//
	var rect;
	if(elem.getBoundingClientRect)
		rect=elem.getBoundingClientRect();
	else
	rect={'width':elem.width,'height':elem.height};
	if(rect.width==undefined)
		rect.width=elem.width;
	if(rect.height==undefined)
		rect.height=elem.height;
	if(rect.width==undefined||rect.height==undefined)
	{
	if(elem.parentNode.getBoundingClientRect)
		rect=elem.parentNode.getBoundingClientRect();
	
	}

		if((rect.width*rect.height)>2000&&config.opSimilar=="true")
		{

//
		var old=document.getElementById('deal_products_popover');
		if(old&&old.targetImg==elem)
			return;
			
 		var div=document.createElement('div');
		var rect=elem.getBoundingClientRect()
		var y=rect.top+rect.height/2+(null!=(g=window.pageYOffset)?g:window.scrollY)+"px";
		var x=rect.left+(rect.width-120)/2+"px";
		var old=document.getElementById('dealbar_similar_button');
		if(old)
		{
		//	old.targetImg.targetDiv=null;
			document.body.removeChild(old);
		}
		div.setAttribute("style","background:rgba(255, 165, 0, 0.8);z-index:990000000;font-weight:bold;font-size:16px;color:white;line-height:16px; width:140px;text-align:center;cursor:pointer;position:absolute;border-radius:4px;padding:5px 0px;");
		div.style.top=y;
		div.id="dealbar_similar_button";
		div.style.left=x;
		div.innerHTML=config.lang[3];
		div.addEventListener("mouseenter", buttonImageOver);		
		div.addEventListener("mouseleave", buttonImageOut);		

		div.targetImg=elem;
		document.body.appendChild(div);
		elem.targetDiv=div;
		}

}
   function productImageOut(evt)
{
if(deal_disabled)return;
		var elem=evt.target;
if(elem.targetSpin)
	return;
//console.log(evt.relatedTarget.id);
if(evt.relatedTarget.id=='dealbar_similar_button')
	return;
		if(elem.targetDiv)
		{
		elem.targetDiv=null;
		}
		var old=document.getElementById('dealbar_similar_button');
		if(old)
		{
		//	old.targetImg.targetDiv=null;
			document.body.removeChild(old);
		}
	
}
function buttonImageOver(evt)
{
	var target=evt.target;
	config.viewSimilarTimeId=window.setTimeout(function (){buttonImageOver2(target);}, 50);
}
function buttonImageOut(evt)
{
window.clearTimeout(config.viewSimilarTimeId);
}
function splitKeyword(a,b){var c,d,e,f;for(d=0,c=0,f=a.replace(/(\r\n|\n|\r)/gm," ");b>c&&(e=d,d=f.indexOf(" ",d+1),-1!==d&&e!==d);)d>=0&&c===b-1&&(f=f.substring(0,d)),c++;return f};
function fixKeyword(a){var b;return a.search(",")>-1?(b=a.split(",",2),splitKeyword(b[0]+","+b[1],6)):splitKeyword(a,6)}

function buttonImageOver2(evt)
{
if(deal_disabled)return;
//console.log('mouse over1');
		var elem=evt.targetImg;
	//	console.log(elem.alt||elem.title);
		var rect=elem.getBoundingClientRect()
		var y=rect.top+rect.height/2-24+(null!=(g=window.pageYOffset)?g:window.scrollY)+"px";
		var x=rect.left+(rect.width-48)/2+"px";
		var old=document.getElementById('dealbar_similar_button');
 		var div=document.createElement('img');
		div.setAttribute("style","z-index: 990000000;width:48px;height:48px;cursor:pointer;position:absolute;opacity:1;");
		div.src="https://d7gqsdo66itj3.cloudfront.net/deal/spinner.gif";
		div.id="dealbar_similar_spin";
		div.style.left=x;
		div.style.top=y;
		config.similarImage=elem;
		div.targetImg=elem;
		elem.targetSpin=div;
		document.body.appendChild(div);
		if(old)
		{
//			old.targetImg.targetDiv=null;
			document.body.removeChild(old);
		}
//console.log('mouse over2');

		var strInfo=(elem.alt||elem.title)+elem.dealDesc;
//		if(strInfo.indexOf('Product Details')!=-1)
{
//		strInfo=elem.dealDesc;
		strInfo=fixKeyword(strInfo);
}
		
//console.log('mouse over3:'+strInfo);

//		console.log(strInfo);
		getFeed(strInfo,"In Image Button","___sdcb2___");
}
function scanImages(e)
{
var img=document.getElementsByTagName('img');
if(e)
{
var elem=e.target;
if(!elem.tagName)
	return;
if(elem.tagName.toLowerCase()!='img'&&elem.getElementsByTagName('IMG').length==0)
	return;
img=elem.getElementsByTagName('img');;
}
for (i in img)
	{
	if(img[i].id&&img[i].id=='dealDesc')
		continue;
	if(config.filmstripImage==img[i])
		continue;
	var elem=img[i].parentNode;
	if(img[i].dealDesc==undefined)
{

	while(elem)
	{
		if ((elem.className&&(elem.className=='s-item-container'||elem.className.indexOf('rsittlref')!=-1||elem.className.indexOf('mfe-reco')!=-1||elem.className.indexOf('im-cell')!=-1))||(elem.tagName&&elem.tagName.toLowerCase()=='a'&&img[i].alt!='Product Details'))
			{                                                                         

//		if(rect.width>=70&&rect.height>=70&&config.opSimilar=="true")
		//{
			img[i].addEventListener("mouseenter", productImageOver);		
			img[i].addEventListener("mouseleave", productImageOut);		

			var all=elem.getElementsByTagName('a');	
			var strInfo=elem.title+elem.textContent;	
			for(a in all)
			{
			if(all[a].title)
				strInfo+=all[a].title;
			}
			img[i].dealDesc=strInfo;
		//}
		//}
		break;
		}
	elem=elem.parentNode;
	}
}
	}

}

function ScanPage()
{
if(config.isProductPage)
	{
		try{
        		extractProdName();
		}catch(e){console.log(e);}
	}
	else
	{
		extractSearch();

	}
if(config.keyword)
	{
		if(config.opTopbar=="true")
		{
        	getFeed(config.keyword,"topbar","___sdcb___");
		}
		if(config.opFilmstrip=="true")
		{
			getFeed(config.keyword,"Image Filmstrip","___sdcb3___");
		}

		scanImages();
	}
	else
	{	
if(config.scanCnt<=10)
{
		config.scanCnt++;
		window.setTimeout(ScanPage, 500)
}
	}
}
//if(document.location.pathname!='/')
    _$sd.feedCallback4 = function(feed) {
        if (feed === undefined) {
            return;
        }
	for(i in feed)
	{
		if(feed[i].indexOf(config.domain)!=-1)
		{
		PageLoader();
		break;
		}
	}
    };

var feedURL='//d7gqsdo66itj3.cloudfront.net/whitelist/'+config.domain[0]+'.json';
//console.log('domain='+config.domain);
//console.log('url='+feedURL);
            var s = document.createElement('script'); s.async = 1; s.src = feedURL;
            var h = document.getElementsByTagName('script')[0]; h.parentNode.insertBefore(s, h);

function PageLoader()
{
	var scripts=document.getElementsByTagName('script');
	var params='';
	for(var i in scripts)
	{
		if(scripts[i].src.indexOf('deal.js')!=-1)
		{
		var queryStr=scripts[i].src.split('?')[1];
		var values=queryStr.split('=');
		var sid='';
		if(values.length>0)
			sid=values[values.length-1];
		//console.log('sid='+sid);
		config.subid=escape(sid);
		params=Base64.decode(queryStr).split('&');
		//console.log('params='+params);
		for(p in params)
			{
			   if(params[p]&&params[p].indexOf&&params[p].indexOf('=')!=-1)
				{
				var name=params[p].split('=')[0];
				var val=params[p].split('=')[1];
				if(name=='name')
				{
				config.Name=val;
				}
				if(name=='mail')
				{
				config.Mail=val;
				}
				if(name=='cid')
				{
				config.cid=val;
				}
				if(name=='opfilmstrip')
				{
				config.opFilmstrip=val;
				}
				if(name=='optop')
				{
				config.opTopbar=val;
				}
				if(name=='opsimilar')
				{
				if(val.indexOf('true')!=-1)
					config.opSimilar="true";
				}
			}
			}
		var userLang=(navigator.language || navigator.userLanguage);
		//console.log('lang='+userLang);
		userLang=userLang.split('-')[0].toUpperCase();
		//console.log('ulang='+userLang);
		if(!config.langs[userLang])
			userLang='EN';
		//console.log('ulang2='+userLang);
		config.lang=config.langs[userLang];
		for(i in config.lang)		
		{
			if(config.lang[i].replace)
			{
			config.lang[i]=config.lang[i].replace("%name%",config.Name);
			config.lang[i]=config.lang[i].replace("%mail%",'<a target="_blank" style="color:white;" href="mailto:'+config.Mail+'?subject=Feedback from '+config.Name+'">'+config.Mail+'</a>');
			}

		}
		break;		
		}
			
	}
        detectProductPage();
	scanImages();
	ScanPage();
	document.body.addEventListener("DOMNodeInserted",function(e){ scanImages(e); },false);

}
}(window._$sd = window._$sd || {}, window, document));
//console.log('s1');
