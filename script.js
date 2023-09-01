function changeToRed() {
    noColor();
  document.getElementById('backgroundC1').style.backgroundColor = 'red';
}
function changeToOrange() {
    noColor();
  document.getElementById('backgroundC2').style.backgroundColor = 'Orange';
}
function changeToRedOrange() {
    noColor();
  document.getElementById('backgroundC1').style.backgroundColor = 'red';
  document.getElementById('backgroundC2').style.backgroundColor = 'orange';
}
function changeToGreen() {
    noColor();
  document.getElementById('backgroundC3').style.backgroundColor = 'Green';
}
let Interval
function automatic(){
   Interval = setInterval(autoLights, 4000);
   setTimeout (stopInterval, 4300);
}
function stopInterval(){
    clearInterval(Interval)
}
function autoLights(){
    setTimeout(changeToRed, 500);
    setTimeout(changeToOrange, 1000);
    setTimeout(changeToRedOrange, 1500);
    setTimeout(changeToGreen, 2000);
}

function noColor() {
  document.getElementById('backgroundC1').style.backgroundColor = '';
  document.getElementById('backgroundC2').style.backgroundColor = '';
  document.getElementById('backgroundC3').style.backgroundColor = '';
}