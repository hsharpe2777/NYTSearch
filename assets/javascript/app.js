// Built by LucyBot. www.lucybot.com
var searchKey = $("#search").val();
 // console.log(searchKey);

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "c8786f23b758417fa05b1f1666203f14",
  'q': "Beyonce"

});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result.response.docs[0].web_url);
  console.log(result.response.docs[0].headline.main);
  console.log(result.response.docs[0].byline.original);
  console.log(result.response.docs[0].pub_date);

  
});