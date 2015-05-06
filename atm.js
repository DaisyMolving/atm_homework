$(document).ready(function(){ 

var firstRegInput = 0;
var secondRegInput = 0;
var firstSaveInput = 0;
var secondSaveInput = 0;
var inputAmountSave = [];
var saveAccountDisplay = [];



  $('#deposit1').on('click', function(){
    // $('#amount1').val();
    $('#balance1').html($('#amount1').val());
  firstRegInput = Number($('#balance1').text());
  });

  $('#deposit2').on('click', function(){
    $('#balance2').html($('#amount2').val());
    firstSaveInput = Number($('#balance2').text());
  });




  $('#withdraw1').on('click', function(){
    $('#balance1').html($('#amount1').val());
    secondRegInput = Number($('#balance1').text());{
    console.log("$" + (firstRegInput-secondRegInput));
    }
  });

  

   $('#withdraw2').on('click', function(){
    $('#balance2').html($('#amount2').val());
    secondSaveInput = Number($('#balance2').text());{
    console.log("$" + (firstSaveInput-secondSaveInput));
    }
  });

}); 



