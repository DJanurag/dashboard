$(document).ready(function(){
           
            $('.list-group a').attr('href','javascript:;') 

            $('.list-group a').on('click',function() {
              $(this).parent().find('.panel').slideUp()
               $(this).next().slideDown();
            })
          })

