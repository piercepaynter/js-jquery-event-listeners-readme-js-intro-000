function getIt(){
  $('p').on("click", function(){
    alert('Hey!');
});
}

function frameIt(){
  $('img').addClass('tasty').on('load', function(){
});
}
/*
function pressIt(){
  $('input#typing').on('keydown', function(key) {
  if(key.which == 71){
      alert('G was pressed');
  });
  }
}
*/
function submitIt(){
  $("#typing").trigger('submit').on("submit", function() {
    alert('Your form is going to be submitted now.';
});
}

$(document).ready(function(){

getIt()
frameIt()
//pressIt()
submitIt()

});
