//Only current bug as far as I can tell is that you can have multiple
//beats playing at one time. Also, I want the metronome to start when
//"enter" is pressed.

var BPMID;


function play() {                             //Simply plays a beep when invoked
  var audio = new Audio("beep.flac");
  audio.play();
}


var calcdBpm = function() {                          //Calculates the amount of
  var bpm = document.getElementById("input").value;  //milliseconds based on the BPM
  var milliSecs;
  if (bpm.length == 0) {
    return false;
  } else {
    milliSecs = ((60 / bpm) * 1000);
    return milliSecs;
  }
};


function start() {
  var finalBpm = calcdBpm();
  if (finalBpm === false){
    document.getElementById("bigText").innerHTML = "Please define a tempo.";
  } else {
    BPMID = setInterval(play, finalBpm);
    var bpm = document.getElementById("input").value;
    document.getElementById("bigText").innerHTML = bpm;  //This little part is for fun
  }
}


function stop() {
  clearInterval(BPMID);
}
