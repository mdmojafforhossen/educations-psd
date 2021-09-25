





  // image gallary
     $(document).ready(function(){

      $(".hd").slice(0,8).show();
      $(".ShowMore").on("click",function(){
         $(".hd:hidden").slice(0,4).show();

         if($(".hd:hidden").length == 0){
          $(".ShowMore").fadeOut("slow");
         }
      });

     });
   
    // image gallary