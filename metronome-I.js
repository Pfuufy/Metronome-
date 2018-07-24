
var play = function() {
  var audio = new Audio('beep.flac');
  audio.play();
}

/var calcdBpm = function(bpm) {
  var bpm = document.getElementById('input').innerText;
  var milliSecs = ((60 / bpm) * 1000);
  return milliSecs;
}

var start = setInterval(play, 1000);

function stop() {
  clearInterval(start);
}
