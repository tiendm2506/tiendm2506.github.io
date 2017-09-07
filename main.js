 $(function(){
     jQuery(".mouse").click(function() {
         jQuery('html, body').animate({
             scrollTop: jQuery(".knowledge").offset().top
         }, 800);
     });
})  
 