console.log('my-note app.js');

var fullScreenButton = document.querySelector('.btn-fullscreen');
var aboutButton = document.querySelector('.btn-about');
var aboutOverlay = document.querySelector('.overlay');

const header = new FullScreen(fullScreenButton);
const overlay = new AboutOverlay(aboutButton, aboutOverlay);

