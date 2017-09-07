 $(function(){
     $(".mouse").click(function() {
         $('html, body').animate({
             scrollTop: $(".knowledge").offset().top
         }, 800);
     });
     $("#comment").click(function() {
         $('html, body').animate({
             scrollTop: $(".commentSection").offset().top
         }, 800);
     });
     $("#kinhnghiem").click(function() {
         $('html, body').animate({
             scrollTop: $(".knowledge").offset().top
         }, 800);
     });
})  
 