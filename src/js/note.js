function Note(
    noteContent,
    noteList, 
    newNoteButtonElement, 
    saveNoteToStorageButtonElement,
    saveNoteButtonElement, 
    modalElement, 
    newModalYesClassName = 'modal-yes', 
    newModalNoClassName = 'modal-no') {

    this.noteContent = noteContent;
    this.noteList = noteList;
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
        this.noteList.addEventListener('click', this.deleteItemEventListener);
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
        let item = {
            id: this.note.lastNumber + 1,
            content: this.noteContent.value
        }
        this.note.data.push(item);

        this.note.lastNumber++;
        this.note.length++;

        await localStorage.setItem("note", JSON.stringify(this.note));

        this.listItem();
        
    }

    this.listItem = () => {
        if(this.note.data.length !== 0) {
            this.noteList.innerHTML = "";
            this.note.data
            .filter(item => item ? true : false)
            .map(item => {
                let block = this.renderBlock(item);
                let hr = document.createElement('hr');
                hr.className="note-border";
                this.noteList.append(block);
                this.noteList.append(hr);
            });
            this.modalYes();
        } else {
            this.noteList.innerHTML = `
            아무것도 없어요!
            `
        }
    }

    this.renderBlock = (item) => {
        let block = document.createElement('div');
        block.className = "note-item"
        block.key= item.id;
        block.innerHTML = 
        `
        <div class="note-item-content">${item.content}</div>
        <button class="note-item-delete material-icons">
            delete
        </button>
        `
        return block;
    }
    this.getNoteDataFromStorage = async () => {
        try {
            var note = JSON.parse(await localStorage.getItem("note"));
            if(note === null) throw err;
        } catch (err) {
            var note = {
                data : [],
                lastNumber : 0,
                length: 0,
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

    this.deleteItemEventListener = async event => {
        let trash = event.target;
        console.log(trash);
        let number = parseInt(trash.parentNode.key);
        if(number !== NaN) {
            this.note.data = this.note.data.filter(item => parseInt(item.id) !== number);
            this.note.length--;
            await localStorage.setItem("note", JSON.stringify(this.note));
            this.listItem();
        }
        
    }

    this.init = async () => {
        this.note = await this.getNoteDataFromStorage();
        this.listItem();
    }

    this.setEventListener();
    this.init();

}