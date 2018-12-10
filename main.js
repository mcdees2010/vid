var ua = navigator.userAgent.toLowerCase();
var is_safari = (ua.indexOf("safari/") > -1 && ua.indexOf("chrome") < 0);
if(is_safari) {
    var video = document.getElementsByClassName("video-background")
    setTimeout(function() {
       video.play();
    }, 50);
}          