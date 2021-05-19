var angryButton = document.getElementById('angry_button');
var scaredButton = document.getElementById('scared_button');
var happyButton = document.getElementById('happy_button');
var video = document.getElementById('video');


angryButton.addEventListener('click', playAngry);
scaredButton.addEventListener('click', playScared);
happyButton.addEventListener('click', playHappy);

function playAngry() {
    video.src = "img/insert.mp4";
}

function playScared() {
    video.src = "img/swipe.mp4";
}

function playHappy() {
    video.src = "img/tap.mp4";
}