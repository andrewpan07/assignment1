var photoDifferences = [12, 10]; // the # of differences in each slide
var timeLength = 20000;
showDisplay(photoDifferences, timeLength);

var start = $("#start");
var middle = $("#middle");
var end = $("#end");

var slideTitle = $("#slideTitle");
var image1 = $("#image1");
var image2 = $("#image2");

var timer = $("#timer");

function showDisplay(photoDifferences, timeLength) {
  var delay1 = 5000;
  var delay2 = delay1 + photoDifferences.length * timeLength;

  setTimeout(() => {
    start.hide();
    middle.show();
    startTimer();
    showImage(photoDifferences, timeLength, 0);
  }, delay1);

  setTimeout(() => {
    middle.hide();
    end.show();
  }, delay2);
}

function showImage(photoDifferences, timeLength, i) {
  timer.text(timeLength / 1000);
  slideTitle.text("Spot the " + photoDifferences[i] + " Differences");
  image1.attr("src", "./photos/photo" + i + "a.jpeg");
  image2.attr("src", "./photos/photo" + i + "b.jpeg");

  if (i + 1 < photoDifferences.length) {
    setTimeout(function () {
      showImage(photoDifferences, timeLength, i + 1);
    }, timeLength);
  }
}

function startTimer() {
  setInterval(() => timer.text(timer.text() - 1), 1000);
}

$(document).ready(function () {
  $("#instructions").click(function () {
    alert("Please spot the differences!");
  });
});
