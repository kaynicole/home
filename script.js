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
                      
    }).mousedown(function() {  
            $(this).stop().animate({'backgroundColor': 'rgba(0,0,0,0.1)'}, 'fast');  
      }).mouseup(function() {  
            $(this).stop().animate({'backgroundColor': 'rgba(0,0,0,0.5)'}, 'fast');  
    });  
}); 

		$('.myMenu > li').bind('mouseover', openSubMenu);
		$('.myMenu > li').bind('mouseout', closeSubMenu);
		
		function openSubMenu() {
			$(this).find('ul').css('visibility', 'visible');	
		};
		
		function closeSubMenu() {
			$(this).find('ul').css('visibility', 'hidden');	
		};
				   
	});

 
