$(function(){
	$.ajax({url: "js/data.json", success: function(result){
        console.log(result.reportCategories);
    }});		
})


	// $.getJSON('js/data.json', function (data) {
	//     var templ = $('#authortmpl').html();
	//     var mustch = Mustache.to_html(templ, data);
	//     $("#data").html(mustch);
	// });

$.getJSON('js/data.json', function(data) {
    var htmlText = '';
    for ( var key in data ) {
        htmlText += '<h2 class="titular">"'+data[key].reportCategories.name+'"</h2>';                               
        htmlText += '<div class="article-wrapper">';                  
        htmlText += ' <img src="' + data[key].carouselimg + '">';                  
        htmlText += '<div class="title-overlay">';
        htmlText += '<h2>' + data[key].carouseltitle + '</h2>';

        htmlText += '</div>';
        htmlText += '<div class="content">';
        htmlText += '<p>' + data[key].carouseldescription + '</p>';                    
        htmlText += '</div>';
        htmlText += '</div>';
        htmlText += '</article>';
    }
    $('#pwa').append(htmlText);    
 });

 $.getJSON('js/data.json', function(data) {
     var htmlText = '';
     for ( var key in data ) {
         htmlText += '<h2 class="titular">"'+ data[key].imageUrl +'"</h2>';
         htmlText += '<table></table>'
         htmlText += '<div class="number-row">';                  
         htmlText += '<div class="col-one empty"></div>';
         htmlText += '<div class="col-one"> <img src="' + data[key].imageUrl + '"></div>';
         htmlText += '<div class="col-nine ">';
         htmlText += '<div class="number">' + data[key].number + '</div>';                    
         htmlText += '<div class="description"><h3>' + data[key].description + '</h3></div>';                    
         htmlText += '</div>';
         htmlText += '<div class="col-one empty"></div>';
         htmlText += '</div>';
         htmlText += '<div class="horizontal-center">';                  
         htmlText += '<span class="divider"></span>';                  
         htmlText += '</div>';
         htmlText += '</div>';
     }
     $('.number-wrapper').append(htmlText);
 });
