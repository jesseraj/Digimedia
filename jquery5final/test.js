$(document).ready(function(){
    $("h1").mouseenter(function(){
      $("#navig").fadeIn("slow");
    });
  });

  $(document).ready(function(){
    $("nav").mouseleave(function(){
      $("#navig").fadeOut("slow");
    });
  });
