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

//form part function
 var myForm = document.querySelector("#my-form");
//name part
 var nameInput = document.querySelector("#username");
 var passwordInput = document.querySelector("#password");

 //sizes part
//  var sizesInput = $("input[type=radio][name=size]:checked");
 //var smallSize=document.getElementById("small").checked;
 //var mediumSize=document.getElementById("medium").checked;
 //var largeSize=document.getElementById("large").checked;
// var pizzaSizesValue=false;
 // end of sizes part
 
 var pizzaChoices = document.querySelector("#pizzaChoices");


 function Pizza(size,crust,type,toppings){
       this.size = size,  
       this.crust = crust,
       this.type = type,
       this.toppings = toppings
  }
  Pizza.prototype.price = function(){
      if (this.size === "small"){
           this.price += 400;
       }else if(this.size === "medium"){
        this.price += 600;
       }else (this.size === "large")
        this.price += 800;
        return this.price();
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
   
      if (mushroom ==false && olives == false && pineapple == false && onions == false && tomato == false && 
        mozarella ==false && macon == false && salami == false && chicken == false && groundbeef == false ){
         alert("Please select the toppings you would like");
          return false;
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
      

  //  var newPizzaOrder = new Pizza(size,crust,type,toppings,price);
  //  newPizzaOrder.price();
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(`${nameInput.value}:  ${sizesInput} : ${crustInput}:  ${typeInput}
    ${toppingsValue}`));
  
        pizzaChoices.appendChild(li);

        nameInput.value = "";
        passwordInput.value = "";
        sizesInput = "";
   

    ////
    //  var li = document.createElement("li");
    //  li.appendChild(document.createTextNode(`${nameInput.value}`));

    //  pizzaChoices.appendChild(li);

    //  nameInput.value = "";
       
     
 
 
   }


//   //sizes radio checkboxes validation
//   var smallSize=document.getElementById("small").checked;
//   var mediumSize=document.getElementById("medium").checked;
//   var largeSize=document.getElementById("large").checked;
  
//   if(smallSize == false && mediumSize == false && largeSize == false){
//     alert("Please select your pizza size");
//     return false;
//   }
//   //end of the sizes validation  
  
//   //crust radio checkboxes validation
//   var crispyCrust=document.getElementById("crispy").checked;
//   var cc=document.getElementById("crammed").checked;
//   var dd=document.getElementById("double").checked;
//   var gluten=document.getElementById("glutenFree").checked;

  // if( crispyCrust == false && cc == false && dd == false && gluten == false){
  //   alert("Please pick the crust you would like");
  //   return false;
  // }

  // //end radio checkboxes validation
  // var meaty=document.getElementById("meaty").checked;
  // var veggy=document.getElementById("veggy").checked;
  // var formGroupVeg=document.getElementsByClassName("formGroupVeg");
  // var formGroupMeat=document.getElementsByClassName("formGroupMeat");
  // if ((meaty ==false && veggy == false)){
  //   alert("Please select if you would love meat or veggies");
  //   return false;
  // }

  // //toppings checkboxes
  // var mushroom=document.getElementById("mushroom").checked;
  // var olives=document.getElementById("olives").checked;
  // var pineapple=document.getElementById("pineapple").checked;
  // var onions=document.getElementById("onions").checked;
  // var tomato=document.getElementById("tomato").checked;
  // var springOnions=document.getElementById("springOnions").checked;
  // var mozarella=document.getElementById("mozarella").checked;
   
  // if(mushroom == false && olives == false && pineapple == false && onions == false && tomato == false && 
  //   springOnions == false && mozarella == false) {
  //     alert("Please select the toppings you would like");
  //     return false;
  //   }

  // moki

  //price part
  
  // var sizeValue = document.querySelector('input[name = "size"]:checked').value;
  // var crustValue = document.querySelector('input[name = "crust"]:checked').value;
  // var typeValue = document.querySelector('input[name = "type"]:checked').value;
  // var toppings = $("input[type=checkbox][name=toppings]:checked");
  // var toppingsValue = " ";
  // var i = 0;
  // while(i < toppings.length){
  //   toppingsValue += " ,"+(toppings[i]).value;
  //   i++;
  // }  
  
   
  // function Pizza(size,crust,type,toppings){
  //     this.size = size,  
  //     this.crust = crust,
  //     this.type = type,
  //     this.toppings = toppings
  // }


  // Pizza.prototype.price = function(){
  //   if (this.size === "small"){
  //     console.log("mokimo"); }
      // this.price += 300;
    // }else if(this.size === "medium"){
    //   this.price += 500;
    // }else if(this.size === "large"){
    //   this.price += 700;
    // }
    // return `${this.size}`
  
  //  if (this.toppings.indexOf("mushroom") >= 0) {
  //     this.pizzaPrice += 100;
  //   }
  //   if (this.toppings.indexOf("olives") >= 0) {
  //     this.pizzaPrice += 100;
  //   }
  //   if (this.toppings.indexOf("pineapple") >= 0) {
  //     this.pizzaPrice += 100;
  //   }
  //   if (this.toppings.indexOf("onions") >= 0) {
  //     this.pizzaPrice += 100;
  //   }
  //   if (this.toppings.indexOf("tomato") >= 0) {
  //     this.pizzaPrice += 100;
  //   }
  //   if (this.toppings.indexOf("mozarella") >= 0) {
  //     this.pizzaPrice += 100;
  //   }
  //   if (this.toppings.indexOf("macon") >= 0) {
  //     this.pizzaPrice += 100;
  //   }
  //   if (this.toppings.indexOf("salami") >= 0) {
  //     this.pizzaPrice += 100;
  //   }
  //   if (this.toppings.indexOf("chicken") >= 0) {
  //     this.pizzaPrice += 100;
  //   }
  //   if (this.toppings.indexOf("groundbeef") >= 0) {
  //     this.pizzaPrice += 100;
  //   }
  // return this.price;


  //  $('input[type=checkbox]:checked').each(function(index){
  //   //part where the magic happens
  //   console.log(index+' checkbox has value' +$(this).val());
  // });
  



  //  var newPizza = new Pizza(sizeValue,crustValue,typeValue,toppingsValue,price);
  //  newPizza.price();

  // $("#pizzaChoices").append("<li>" + "You ordered a " + newPizza.sizeValue + " " + newPizza.toppingsValue + " pizza. " + " Your total price is kshs: " + newPizza.price + "</li>");
