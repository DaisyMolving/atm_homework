$(document).ready(function(){ 

var firstInput = [];
var regAccountDisplay = [];
var inputAmountSave = [];
var saveAccountDisplay = [];



$('#deposit1').on('click', function(){
    // $('#amount1').val();
  $('#balance1').html($('#amount1').val());
  firstInput = Number($('#balance1').text());
  });

  $('#deposit2').on('click', function(){
    $('#balance2').html("$" + $('#amount2').val());
  });




  $('#withdraw1').on('click', function(){
    $('#balance1').html($('#amount1').val());
  });

  

   $('#withdraw2').on('click', function(){
    console.log(Number($('#amount2')[0]) - Number($('#amount2')[1]));
  });


}); 





































