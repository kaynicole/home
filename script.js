$(document).ready(function() {  
    $('nav').hover(  
        function() {  
            $(this).css('padding', '5px 15px')  
            .stop()  
            .animate({'paddingLeft'    : '25px',  
                     'paddingRight' : '25px',  
                     'backgroundColor':'rgba(0,0,0,0.5)'},  
                     'fast');  
},  
  
        function() {  
            $(this).css('padding', '20px 40px')  
            .stop()  
            .animate({'paddingLeft'    : '20px',  
                      'paddingRight'      : '20px',  
                      'backgroundColor' :'rgba(0,0,0,0.2)'},  
                      'fast');  
                      
    }).mousedown(function() {  
            $(this).stop().animate({'backgroundColor': 'rgba(0,0,0,0.1)'}, 'fast');  
      }).mouseup(function() {  
            $(this).stop().animate({'backgroundColor': 'rgba(0,0,0,0.5)'}, 'fast');  
    });  
}); 
