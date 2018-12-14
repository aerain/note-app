console.log('my-note app.js');

var fullScreenButton = document.querySelector('.btn-fullscreen');
var aboutButton = document.querySelector('.btn-about');
var aboutOverlay = document.querySelector('.overlay');

var textarea = document.querySelector('#memo');
var newNote = document.querySelector('.btn-newnote');
var saveNote = document.querySelector('.btn-savenote-to-storage');
var savePCNote = document.querySelector('.btn-savenote');
var modal = document.querySelector('.modal');

const header = new FullScreen(fullScreenButton);
const overlay = new AboutOverlay(aboutButton, aboutOverlay);
const note = new Note(textarea, newNote, saveNote, savePCNote, modal);
