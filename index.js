var photoDifferences = [12, 10]; // the # of differences in each slide
var index = 0; // the index for each photo slide

var start = $("#start"); // starting page
var middle = $("#middle"); // pages that show the images
var end = $("#end"); // ending page

var slideTitle = $("#slideTitle");
var image1 = $("#image1");
var image2 = $("#image2");
var startButton = $("#startButton");
var nextButton = $("#nextButton");

// transition to slides that show images
startButton.click(function () {
  start.hide();
  middle.show();
  showPage(photoDifferences);
});

// if all differences have been found, go to the next photo
nextButton.click(function () {
  if (photoDifferences[index] == 0) {
    index += 1;
    if (index >= photoDifferences.length) {
      middle.hide();
      end.show();
    } else {
      // if it is the last image shown, go to the end slide
      showPage(photoDifferences, index);
    }
  } else {
    alert("Find all differences before continuing");
  }
});

// show slide with images while erasing the circles of the previous slide
function showPage(photoDifferences) {
  slideTitle.text("Spot the " + photoDifferences[index] + " Differences");
  image1.attr("src", "./photos/photo" + index + "a.jpeg");
  image2.attr("src", "./photos/photo" + index + "b.jpeg");
  $(".circle").hide();
}

// show the instructions when button clicked
$(document).ready(function () {
  $("#instructionsButton").click(function () {
    alert("Please spot the differences");
  });
});

// put a red circle where the user clicked on either image and add
// a corresponding circle on the other image
$(function () {
  image1.click(function (e) {
    if (photoDifferences[index] > 0) {
      // add first circle
      var circle1 = $('<img src="circle.png" class="circle">');
      circle1.css("position", "absolute");
      circle1.css("top", e.pageY - 35);
      circle1.css("left", e.pageX - 35);
      middle.append(circle1);

      // add a second circle 
      var circle2 = $('<img src="circle.png" class="circle">');
      circle2.css("position", "absolute");
      circle2.css("top", e.pageY - 35);
      circle2.css("left", e.pageX - 35 + 330);
      middle.append(circle2);

      // subtract from photoDifferences and change text
      photoDifferences[index] -= 1;
      slideTitle.text("Spot the " + photoDifferences[index] + " Differences");
    } else {
      alert("All differences spotted");
    }
  });

  image2.click(function (e) {
    if (photoDifferences[index] > 0) {
      // add first circle
      var circle1 = $('<img src="circle.png" class="circle">');
      circle1.css("position", "absolute");
      circle1.css("top", e.pageY - 35);
      circle1.css("left", e.pageX - 35);
      middle.append(circle1);

      // add a second circle 
      var circle2 = $('<img src="circle.png" class="circle">');
      circle2.css("position", "absolute");
      circle2.css("top", e.pageY - 35);
      circle2.css("left", e.pageX - 35 - 330);
      middle.append(circle2);

      // subtract from photoDifferences and change text
      photoDifferences[index] -= 1;
      slideTitle.text("Spot the " + photoDifferences[index] + " Differences");
    } else {
      alert("All differences spotted");
    }
  });
});
