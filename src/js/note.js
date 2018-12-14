class Note {
    constructor(noteContent, newNoteButtonElement, saveNoteToStorageButtonElement ,saveNoteButtonElement) {
        this.noteContent = noteContent;
        this.newNoteButtonElement = newNoteButtonElement;
        this.saveNoteToStorageButtonElement = saveNoteToStorageButtonElement;
        this.saveNoteButtonElement = saveNoteButtonElement;

        this.bindMethod = this.bindMethod.bind(this);
        this.bindMethod();
        this.setEventListener();
    }

    bindMethod() {
        this.setEventListener = this.setEventListener.bind(this);
        this.newNote = this.newNote.bind(this);
        this.saveNoteToLocalStorage = this.saveNoteToLocalStorage.bind(this);
        this.saveNoteToPC = this.saveNoteToPC.bind(this);
    }

    setEventListener() {
        this.newNoteButtonElement.addEventListener('click', this.newNote);
        this.saveNoteToStorageButtonElement.addEventListener('click', this.saveNoteToLocalStorage)
        this.saveNoteButtonElement.addEventListener('click', this.saveNoteToPC);
    }

    newNote(event) {
        console.log('babo');
    }   

    saveNoteToLocalStorage(event) {
        console.log('스토리지');
    }

    saveNoteToPC(event) {
        console.log('저장')
    }



}