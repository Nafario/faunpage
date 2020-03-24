$(document).ready(function() {
  $(".fa-search").click(function() {
    var searchBox = $(".input-box");
    if (searchBox.css("opacity") === "0") {
      searchBox.css({
        opacity: "1"
      });
    } else {
      searchBox.css({
        opacity: "0"
      });
    }
  });
});
$(document).ready(function() {
  $(".menu").click(function() {
    var menuBox = $(".menu-ops");
    if (menuBox.css("opacity") === "0") {
      menuBox.css({
        opacity: "1"
      });
    } else {
      menuBox.css({
        opacity: "0"
      });
    }
  });
});
$(".fullBackground").fullClip({
  images: ["images/bg.jpg", "images/bg2.jpg", "images/bg3.jpg"],
  transitionTime: 1500,
  wait: 3000
});
const slider = document.querySelector(".slider");
const indicatorParent = document.querySelector(".control ul");
const indicators = document.querySelectorAll(".control li");
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    document.querySelector(".control .selected").classList.remove("selected");
    indicator.classList.add("selected");
    slider.style.transform = "translateX(" + i * -25 + "%)";
    index = i;
  });
});

const slider2 = document.querySelector(".slider2");
const indicatorParent2 = document.querySelector(".control2 ul");
const indicators2 = document.querySelectorAll(".control2 li");
index2 = 0;

indicators2.forEach((indicator2, i2) => {
  indicator2.addEventListener("click", () => {
    document
      .querySelector(".control2 .selected2")
      .classList.remove("selected2");
    indicator2.classList.add("selected2");
    slider2.style.transform = "translateX(" + i2 * -25 + "%)";
    index2 = i2;
  });
});

var video = document.querySelector(".video");
var play = document.querySelector(".play");

function togglePlayPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
play.onclick = function(params) {
  $(play).css("opacity", "0");
  togglePlayPause();
  setTimeout(zero, 3000);
};

function zero() {
  play.style.opacity = 1;
}

function on() {
  document.getElementById("overlay-img").style.transition = "all .3s";
  document.getElementById("overlay-img").style.display = "block";
}

function off() {
  document.getElementById("overlay-img").style.display = "none";
  document.getElementById("overlay-img").style.transition = "all .3s";
}

function on2() {
  document.getElementById("overlay-img2").style.display = "block";
}

function off2() {
  document.getElementById("overlay-img2").style.display = "none";
}

// third overlay
function on3() {
  document.getElementById("overlay-img3").style.display = "block";
}

function off3() {
  document.getElementById("overlay-img3").style.display = "none";
}
// forth
function on4() {
  document.getElementById("overlay-img4").style.display = "block";
}

function off4() {
  document.getElementById("overlay-img4").style.display = "none";
}

$(document).ready(function() {
  $(".c-btn").click(function() {
    var cBox = $(".form");
    if (cBox.css("opacity") === "0") {
      cBox.css({
        opacity: "1"
      });
    } else {
      cBox.css({
        opacity: "0"
      });
    }
  });
});
