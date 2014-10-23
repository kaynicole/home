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
            $(this).css('padding', '5px 25px')  
            .stop()  
            .animate({'paddingLeft'    : '15px',  
                      'paddingRight'      : '15px',  
                      'backgroundColor' :'rgba(0,0,0,0.2)'},  
                      'fast');  
 
