console.log('my-note app.js');

const fullScreenButton = document.querySelector('.btn-fullscreen'),
    aboutButton = document.querySelector('.btn-about'),
    aboutOverlay = document.querySelector('.overlay'),
    textarea = document.querySelector('#memo'),
    newNote = document.querySelector('.btn-newnote'),
    saveNote = document.querySelector('.btn-savenote-to-storage'),
    savePCNote = document.querySelector('.btn-savenote'),
    modal = document.querySelector('.modal');


const fullscreenCallback = () => {
    let fullscreenIcon = fullScreenButton.querySelector('i');
    if(fullscreenIcon.innerText == "fullscreen") {
        fullscreenIcon.innerText = "fullscreen_exit";
    } else {
        fullscreenIcon.innerText = "fullscreen";
    }
}

const fullscreen = new FullScreen(fullScreenButton, fullscreenCallback);
const overlay = new AboutOverlay(aboutButton, aboutOverlay, 'overlay-toggle');
const note = new Note(textarea, newNote, saveNote, savePCNote, modal);

