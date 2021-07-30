//how to make an order toggle function//
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
$(document).ready(function(){
  $("#pic2").click(function(){
    $(".pick").toggle();
    $("#pic2").hide();
  $(".pick").click(function(){
    $("#pic2").show();
    $(".pick").hide();
    });
  });
});
$(document).ready(function(){
  $("#pic3").click(function(){
    $(".order").toggle();
    $("#pic3").hide();
  $(".order").click(function(){
    $("#pic3").show();
    $(".order").hide();
    });
  });
});
$(document).ready(function(){
  $("#pic4").click(function(){
    $(".doorstep").toggle();
    $("#pic4").hide();
  $(".doorstep").click(function(){
    $("#pic4").show();
    $(".doorstep").hide();
    });
  });
});

//end of the function

function validateInputs(){
  var nameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");

  if(nameInput.value == "" ){
    alert("Please enter your name");
    return false;
  }
  if(passwordInput.value == ""){
    alert("Please create a password");
    return false;
  }  
     
  let price = 0;
   
  function Pizza(size,crust,type,toppings,price){
      this.size = size,  
      this.crust = crust,
      this.type = type,
      this.toppings = toppings,
      this.price = price
  }

  Pizza.prototype.price = function(){
    if (this.size === "small"){
      this.price += 300;
    }else if(this.size === "medium"){
      this.price += 500;
    }else if(this.size === "large"){
      this.price += 700;
    }
  
  }
}