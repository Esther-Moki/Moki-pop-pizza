//what we do toggle function//
$(document).ready(function(){
  $("#pic1").click(function(){
    $(".register").toggle();
    $("#pic1").hide();
  $(".register").click(function(){
    $("#pic1").show();
    $(".register").hide();
    });
  });
});