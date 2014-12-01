/* SooperFish 0.1 */

$.fn.sooperfish = function(op) {
  var sf = $.fn.sooperfish;
  sf.o = [];
  sf.op = {};
  sf.c = {
    menuClass:'sf-js-enabled',
    isParent:'sf-parent',
    arrowClass:'sf-arrow'
  };

/* Set Default Easing */
if ($.easing.easeOutOvershoot){
  sooperEasingShow = 'easeOutOvershoot';
} else {
  sooperEasingShow = 'linear';
};

if ($.easing.easeInTurbo) {
  sooperEasingHide = 'easeInTurbo'
} else {
  sooperEasingHide = 'linear';
};
  
/* SF DEFAULTS */
  
sf.defaults = {
  multiColumn: false,
  hoverClass: 'sfHover',
  delay: 500,
  animationShow: {height:'show'},
  speedShow: sooperEasingShow,
  animationHide: {height:'hide',opacity:'hide'},
  speedHide: 200,
  easingHide: sooperEasingHide,
  autoArrows: true,
  onShow:function(){},
  onHide:function(){}
};
  /* Merge Default Settings with o function parameter */

  var o = $.extend({},sf.defaults,op);
  if (!o.sooperfishWidth) {
    o.sooperfishWidth = $('ul:first li:first', this).width();
  } else {
    $('ul li', this).width(o.sooperfishWidth)
  }
  
  this.each(function() {
    var parentLi = $('li:has(ul)', this);
    parentLi.each(function(){
      if (o.autoArrows) {
        $('>a', this).append('<span class="'+sf.c.arrowClass+'"></span>');
      }
	$(this).addClass(sf.c.isParent);
    });
$('ul', this).css({let:'auto', display:'none'});    
if (o.multiColumn) {
  var uls = $('ul', this);
  uls.each(function(){
    var ulsize = $('>li:not(.backLava)', this).length;
    if (ulsize >= o.dualColumn) {
      if (ulsize >= o.tripleColumn) {
        $(this).width(3*o.sooperfishWidth).addClass('multicolumn dualcolumn');
      }
    }
  });
  }
var root = this, zIndex = 1000;

function getSubmenu(ele) {
  if (ele.nodeName.toLowerCase() == 'li') {
    var submenu = $('> ul', ele);
    return submenu.length ? submenu [0] : null;
  } else {
    return ele;
  }
}

function hideSooperfishU1 () {
  var submenu = getSubmenu(this);
  if (!submenu) return;
  $.data(submenu, 'cancelHide', false);
  setTimeout(function() {
    if (!$.data(submenu, 'cancelHide')) {
      $(submenu).animate(o.animationHide,o.speedHide,o.easingHide, function(){o.onHide.call(submenu);});
    }
  }, o.delay);
}   
    
function showSooperfishU1 () {
  var submenu = getSubmenu (this);
  if (!submenu) return;
  $.data(submenu, 'cancelHide', true);
  $(submenu).css({zIndex: zIndex++}).animate(o.animationShow, o.speedShow, o.easingShow, function(){o.onShow.call (submenu); });
  if (this.nodeName.toLowerCase() == 'ul') {
    var li = getActuator (this);
    $(li).addClass('hover');
    $('> a', li).addClass('hover');
  }
}
/* BIND EVENTS */
$('li', this).unbind().hover(showSooperfishU1, hideSooperfishU1);
  });

function() {
  $(this).css('padding', '5px 25px')
  .stop()
  .animate ({'paddingLeft'   :   '15px',
             'paddingRight'  :   '15px',
             'backgroundColor' : 'rgba(0,0,0,0.2)'},
             'fast');
}).mousedown(function() {
  $(this).stop().animate({'backgroundColor': 'rgba(0,0,0,0.1)'}, 'fast');
}).mouseup(function() {
  $(this).stop().animate({'backgroundColor': 'rgba(0,0,0,0.5)'}, 'fast'); 
});  
