(function(){
  var current = 0;
  var max = 0;
  var container;

  function init(){
    container = jQuery(".slide ul");
    max = container.children().length;
    events();
  }
  function events(){
    jQuery("button.prev").on("click", prev);
    jQuery("button.next").on("click", next);
       jQuery(window).on("keydown", keydown);
//      jQuery(window).mouseover(function(){alert("mouse over")});
//      jQuery(window).mouseleave(function(){this.off('mouseover')});
  }
  function prev(){
    current--;
    if(current < 0) current = max - 1;
    animate();
  }
  function next(){
    current++;
    if(current > max - 1) current = 0;
    animate();
  }
  function animate(){
    var moveX = current * 600;
    TweenMax.to(container, 0.8, {marginLeft: -moveX, ease:Expo.easeOut});
//    TweenMax.to(container, 0.8, {marginLeft: -moveX, ease:Expo.easeOut});
  }
    function keydown(e){
      if(e.which == 39 /* right */){
          next();
      } else if(e.which == 37 /* left */){
          prev();
      }
  }
  jQuery(document).ready(init);
})();
