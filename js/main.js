var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close1")[0];

btn1.onclick = function() {
    modal1.style.display = "block";
}
span1.onclick = function() {
    modal1.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}


var video = document.querySelector("#comingSoonVideo");
var videoContainer = document.querySelector("#comingSoonVideoContainer");



videoContainer.onmousemove = handleMouseMove;
var videoPlayBackSpeed = 0.5;
var videoPlayBackSpeedAmount = 0.01;
video.playbackRate = videoPlayBackSpeed;

function handleMouseMove(event) {
    if (event.pageX < 500) {
        if (videoPlayBackSpeed - videoPlayBackSpeedAmount >= 0.35) {
            videoPlayBackSpeed -= videoPlayBackSpeedAmount;
        }
    }

    if (event.pageX > 500) {
        if (videoPlayBackSpeed + videoPlayBackSpeedAmount <= 1) {
            videoPlayBackSpeed += videoPlayBackSpeedAmount;
        }
    }
}

video.playbackRate = videoPlayBackSpeed;