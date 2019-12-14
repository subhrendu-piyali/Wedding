function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
////////////////////////////////////////////////////
function LangBn(){
  var x=document.getElementsByClassName("english");
  $("body").fadeOut("slow");
  for (var j = 0; j < x.length; j++) {
  	x[j].style.display = "none";}
  var y = document.getElementsByClassName("bengali");
  sleep(900);
  for (var i = 0; i < y.length; i++) {
  	y[i].style.display= "inherit";}
  $("body").fadeIn(500);
}
////////////////////////////////////////////////////
function LangEn(){
  var x=document.getElementsByClassName("bengali");
  $("body").fadeOut("slow");
  for (var j = 0; j < x.length; j++) {
  	x[j].style.display = "none";}
  var y = document.getElementsByClassName("english");
  sleep(900);
  for (var i = 0; i < y.length; i++) {
  	y[i].style.display= "inherit";}
  $("body").fadeIn(500);
}
