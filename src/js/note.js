class Note {
    constructor(noteContent, newNoteButtonElement, saveNoteToStorageButtonElement ,saveNoteButtonElement, modalElement) {
        this.noteContent = noteContent;
        this.newNoteButtonElement = newNoteButtonElement;
        this.saveNoteToStorageButtonElement = saveNoteToStorageButtonElement;
        this.saveNoteButtonElement = saveNoteButtonElement;
        this.modalElement = modalElement;

        this.bindMethod = this.bindMethod.bind(this);
        this.bindMethod();
        this.setEventListener();
    }

    bindMethod() {
        this.setEventListener = this.setEventListener.bind(this);
        this.newNote = this.newNote.bind(this);
        this.saveNoteToLocalStorage = this.saveNoteToLocalStorage.bind(this);
        this.saveNoteToPC = this.saveNoteToPC.bind(this);
        this.modalEvent = this.modalEvent.bind(this);
        this.modalYes = this.modalYes.bind(this);
    }

    setEventListener() {
        this.newNoteButtonElement.addEventListener('click', this.newNote);
        this.saveNoteToStorageButtonElement.addEventListener('click', this.saveNoteToLocalStorage)
        this.saveNoteButtonElement.addEventListener('click', this.saveNoteToPC);
        this.modalElement.addEventListener('click', this.modalEvent);
        
    }

    newNote(event) {
        if(this.noteContent.value !== "") {
            console.log("뭐");
            this.modalElement.classList.add('has-text');
        } else {
            this.modalEvent();
        }
    }   

    saveNoteToLocalStorage(event) {
        console.log('스토리지');
    }

    saveNoteToPC(event) {
        console.log('저장')
    }

    modalYes() {
        this.noteContent.value = "";
    }
    modalEvent(event) {
        let touchedElement = event.target;
        if(touchedElement.className === "modal has-text" || touchedElement.className === "modal-no") {
            this.modalElement.classList.remove('has-text');
        } else if(touchedElement.className === "modal-yes") {
            this.modalYes();
        }
    }

}