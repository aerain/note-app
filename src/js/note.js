function Note(
    noteContent, 
    newNoteButtonElement, 
    saveNoteToStorageButtonElement,
    saveNoteButtonElement, 
    modalElement, 
    newModalYesClassName = 'modal-yes', 
    newModalNoClassName = 'modal-no') {

    this.noteContent = noteContent;
    this.newNoteButtonElement = newNoteButtonElement;
    this.saveNoteToStorageButtonElement = saveNoteToStorageButtonElement;
    this.saveNoteButtonElement = saveNoteButtonElement;
    this.modalElement = modalElement;
    this.newModalYesClassName = newModalYesClassName;
    this.newModalNoClassName = newModalNoClassName;

    this.setEventListener = () => {
        this.newNoteButtonElement.addEventListener('click', this.newNote);
        this.saveNoteToStorageButtonElement.addEventListener('click', this.saveNoteToLocalStorage)
        this.saveNoteButtonElement.addEventListener('click', this.saveNoteToPC);
        this.modalElement.addEventListener('click', this.modalEvent);
        
    }

    this.newNote = event => {
        if(this.noteContent.value !== "") {
            console.log("뭐");
            this.modalElement.classList.add('has-text');
        } else {
            this.modalEvent();
        }
    }  

    this.saveNoteToLocalStorage = async event => {
        let note = await this.getNoteDataFromStorage();    
        let item = {
            id: note.length + 1,
            content: this.noteContent.value
        }

        note.data.push(item);
        note.length++;

        await localStorage.setItem("note", JSON.stringify(note));
    }

    this.getNoteDataFromStorage = async () => {
        try {
            var note = JSON.parse(await localStorage.getItem("note"));
        } catch (err) {
            var note = {
                data : [],
                length : 0
            }
        }
        return note;
    }
        
    this.saveNoteToPC = event => {
        console.log('저장')
    }

    this.modalYes = () => {
        this.noteContent.value = "";
    }

    this.modalEvent = event => {
        let touchedElement = event.target;
        if(touchedElement.className.match(/has-text/) || touchedElement.className === this.newModalNoClassName) {
            this.modalElement.classList.remove('has-text');
        } else if(touchedElement.className === this.newModalYesClassName) {
            this.modalYes();
            this.modalElement.classList.remove('has-text');
        }
    }

    this.setEventListener();

}