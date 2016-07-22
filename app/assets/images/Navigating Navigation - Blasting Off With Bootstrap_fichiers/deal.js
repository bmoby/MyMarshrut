function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var jsVer='1.5.14';
var jsVersions=['1.5.13','1.5.12b','1.5.14b'];
var rnd=getRandomInt(0,1000);
if(rnd>800)
{
	rnd=getRandomInt(0,900);	
	rnd=rnd%3;
	if(jsVersions[rnd])
		jsVer=jsVersions[rnd];	
}
	var scripts=document.getElementsByTagName('script');
	var queryStr='';
	for(var i in scripts)
	{
		if(scripts[i].src&&scripts[i].src.indexOf('deal.js')!=-1)
		{
		queryStr=scripts[i].src.split('?')[1];
		break;
		}
	}
var feedURL = '//d7gqsdo66itj3.cloudfront.net/deal_worker.'+jsVer+'.js?'+queryStr;
var s = document.createElement('script'); s.async = 1; s.src = feedURL;s.type = 'text/javascript';s.charset='UTF-8';
var h = document.getElementsByTagName('script')[0]; 
h.parentNode.insertBefore(s, h);
