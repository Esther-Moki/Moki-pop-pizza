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

  //end of the how to make an order toggle function//

 //form validation and placing your order function//

  var myForm = document.querySelector("#my-form");
  var nameInput = document.querySelector("#username");
  var passwordInput = document.querySelector("#password");
  var pizzaChoices = document.querySelector("#pizzaChoices");

  var pizzaprice = 0;

  function Pizza(sizesInput,crustInput,typeInput,toppingsValue){
    this.sizesInput =  sizesInput,  
    this.crustInput = crustInput,
    this.typeInput = typeInput,
    this.toppingsValue = toppingsValue,
    this.pizzaprice = priceValue;
  }
  Pizza.prototype.price = function(){
    if (sizesInput === "Small"){ 
      this.pizzaprice += 600;
    }else if(sizesInput === "Medium"){
      this.pizzaprice += 800;
    }else (sizesInput === "Large")
      this.pizzaprice += 1000;
      return this.pizzaprice;  
  }

  myForm.addEventListener("submit",onSubmit);

  function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === "" ){
      alert("Please enter your fullname");
      return false;
      }
    if(passwordInput.value === ""){
        alert("Please create a password");
        return false;
      }  
    var smallSize=document.getElementById("small").checked;
    var mediumSize=document.getElementById("medium").checked;
    var largeSize=document.getElementById("large").checked;
    if(smallSize == false && mediumSize == false && largeSize == false){
        alert("Please select your pizza size");
        return false;
      }

    var crispyCrust=document.getElementById("crispy").checked;
    var cc=document.getElementById("crammed").checked;
    var dd=document.getElementById("double").checked;
    var gluten=document.getElementById("glutenFree").checked;
    if( crispyCrust == false && cc == false && dd == false && gluten == false){
      alert("Please pick the crust you would like");
      return false;
      }

    var meaty=document.getElementById("meaty").checked;
    var veggy=document.getElementById("veggy").checked;
    if (meaty ==false && veggy == false){
        alert("Please select if you would love meat or veggies");
        return false;
      }

    var mushroom=document.getElementById("mushroom").checked;
    var olives=document.getElementById("olives").checked;
    var pineapple=document.getElementById("pineapple").checked;
    var onions=document.getElementById("onions").checked;
    var tomato=document.getElementById("tomato").checked;
    var mozarella=document.getElementById("mozarella").checked;
    var macon=document.getElementById("macon").checked;
    var salami=document.getElementById("salami").checked;
    var chicken=document.getElementById("chicken").checked;
    var groundbeef=document.getElementById("groundbeef").checked;
    if(mushroom ==false && olives == false && pineapple == false && onions == false && tomato == false && 
      mozarella ==false && macon == false && salami == false && chicken == false && groundbeef == false ){
      alert("Please select the toppings you would like");
      return false;
    }

    var dineInput = document.getElementById("dine-in").checked;
    var homeDeliveryInput =  document.getElementById("homeDelivery").checked;
    if(dineInput == false && homeDeliveryInput == false){
       alert("Please select if your dinning in or if its home delivery");
       return false;
     }
    if(homeDeliveryInput  == true){
      var locationInput = "Please put your location";
      var locationInputOne = prompt(locationInput);
      alert("Your pizza will be delivered at: " + locationInputOne);
     }
  
    var sizesInput = $("input[type=radio][name=size]:checked").val();
    var crustInput = $("input[type=radio][name=crust]:checked").val();
    var typeInput = $("input[type=radio][name=type]:checked").val();
    var toppings = $("input[type=checkbox][name=toppings]:checked");
    var toppingsValue = " ";
    var i = 0;
    while(i < toppings.length){
    toppingsValue += " ,"+(toppings[i]).value;
    i++;
    }  
    var placeInput = $("input[type=radio][name=place]:checked").val();

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(`Name: ${nameInput.value}, Pizza size: ${sizesInput}, Crust: ${crustInput}, Type: ${typeInput},
    Toppings: ${toppingsValue}, kshs: ${pizzaprice},${placeInput}, ${locationInputOne}`));
    
    pizzaChoices.appendChild(li);

    nameInput.value = "";
    passwordInput.value = "";
    
  }

  //end of form validation and placing your order function//



  
  
  


  


 