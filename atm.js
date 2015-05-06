$(document).ready(function(){
  
})


var inputAmount = function() {
  $('input#amount1').val();
};

var depositAmount = function(event) {
  $('input#deposit1').on('click', inputAmount).display($('div#balance1'));
};







