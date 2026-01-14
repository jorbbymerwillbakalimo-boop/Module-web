$(document).ready(function(){
//==============================================================================





/*==============================================================================
  jQuery events
==============================================================================*/

  // Change wrapper and <li> color on wrapper dblclick
  jQuery("body").on("dblclick", ".wrapper", function() {
    jQuery(this).css("background-color", "pink");
    jQuery("li").css("background-color", "yellow");
  });

   jQuery("body").on("click", "ul", function() {
    jQuery(this).css("slideToggle");
    
  });
  
  
   // Click on title change color  
    jQuery("body").on("click", "h1", function() {
    jQuery(this).css("background-color", "pink");
    
    
  }

);

//==============================================================================
});
