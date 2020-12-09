/***add to cart function***/
var addtocart = 0;
function onClick() {
    addtocart += 1;
    document.getElementById("addtocart").innerHTML = addtocart;
};
/***add to cart function***/

/***product carousel***/
$(document).on('ready', function() {
  $(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
{
  breakpoint: 1024,
  settings: {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    dots: true
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3
  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
}

]
  });
});
/***product carousel***/
/***cart slide out***/
$('.js-toggle-cart, .cart__overlay, .cart-close').on('click', function() {
  $('.cart').toggleClass('is-hidden');
});
/***cart slide out***/
/***form slide out***/
$('#submit').on('click', function() {
  $('.return-values').toggleClass('values-hidden');
});
/***form slide out***/
/***form reset***/
function formreset() {
  document.getElementById("contact").reset();
  $(".return-values").toggleClass('values-hidden');
}
/***form reset***/






function check(){
  document.getElementById("fname").innerHTML = document.myform.fname.value;
  document.getElementById("mycity").innerHTML = document.myform.mycity.value;
  document.getElementById("favcolor").innerHTML = document.myform.favcolor.value;
  document.getElementById("favanimal").innerHTML = document.myform.favanimal.value;
  document.getElementById("nochildren").innerHTML = document.myform.nochildren.value;
}





/*


$("#yourname").keyup(function(event) {
  validateInputs();
});

$("#yourcity").keyup(function(event) {
  validateInputs();
});

$("#yourcolor").keyup(function(event) {
  validateInputs();
});

$("#youranimal").keyup(function(event) {
  validateInputs();
});

$("#yourchildren").keyup(function(event) {
  validateInputs();
});

function validateInputs(){
  var disableButton = false;

  var val1 = $("#yourname").val();
  var val2 = $("#yourcity").val();
  var val3 = $("#yourcolor").val();
  var val4 = $("#youranimal").val();
  var val5 = $("#yourchildren").val();

  if(val1.length == 0 || val2.length == 0 || val3.length == 0 || val4.length == 0  || val5.length ==0 ) 
      disableButton = true;

  $('#submit').attr('disabled', disableButton);
}

*/



