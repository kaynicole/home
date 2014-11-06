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



$include-html-dropdown-classes: $include-html-classes;

// We use these to controls height and width styles.
$f-dropdown-max-width: 200px;
$f-dropdown-height: auto;
$f-dropdown-max-height: none;

// Used for bottom position
$f-dropdown-margin-top: 2px;

// Used for right position
$f-dropdown-margin-left: $f-dropdown-margin-top;

// Used for left position
$f-dropdown-margin-right: $f-dropdown-margin-top;

// Used for top position
$f-dropdown-margin-bottom: $f-dropdown-margin-top;

// We use this to control the background color
$f-dropdown-bg: $white;

// We use this to set the border styles for dropdowns.
$f-dropdown-border-style: solid;
$f-dropdown-border-width: 1px;
$f-dropdown-border-color: scale-color($white, $lightness: -20%);

// We use these to style the triangle pip.
$f-dropdown-triangle-size: 6px;
$f-dropdown-triangle-color: $white;
$f-dropdown-triangle-side-offset: 10px;

// We use these to control styles for the list elements.
$f-dropdown-list-style: none;
$f-dropdown-font-color: $charcoal;
$f-dropdown-font-size: rem-calc(14);
$f-dropdown-list-padding: rem-calc(5, 10);
$f-dropdown-line-height: rem-calc(18);
$f-dropdown-list-hover-bg: $smoke;
$dropdown-mobile-default-float: 0;

// We use this to control the styles for when the dropdown has custom content.
$f-dropdown-content-padding: rem-calc(20);
