
var bpmId;

function play() {                             //Simply plays a beep when invoked
  var audio = new Audio("beep.flac");
  audio.play();
}

var calcdBpm = function() {                          //Calculates the amount of
  var bpm = document.getElementById("input").value;  //milliseconds based on the BPM
  var milliSecs = ((60 / bpm) * 1000);
  return milliSecs;
}

function start() {
  bpmId = setInterval(play, calcdBpm());
  var bpm = document.getElementById("input").value;
  document.getElementById("bigText").innerHTML = bpm;  //This little part is for fun
}

function stop() {
  clearInterval(bpmId);
}
