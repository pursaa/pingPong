//business logic
var outPut = function(num) {
var resultArrays = [];
 $("#list").text("");
  for(var i = 1; i <= num; i++){
    if (i % 15 === 0) {
      $("#list").append("<li>ping-pong</li>");
    }else if (i % 5 === 0) {
      $("#list").append("<li>pong</li>");
    }else if (i % 3 === 0) {
      $("#list").append("<li>ping</li>");
    }else {
       $("#list").append("<li>" + i + "</li>");
    }
  }
};

//user interface logic
$(document).ready(function(){
  $("#inPut").submit(function(event){
    event.preventDefault();
    $("#outPut").text("");
    var num = parseInt($("#inPutNumber").val());
    var result = outPut(num);
    $("#outPut").text(result);
  });
});
