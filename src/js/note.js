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
    this.waitLoad = "";

    this.setEventListener = () => {
        this.newNoteButtonElement.addEventListener('click', this.newNote);
        this.saveNoteToStorageButtonElement.addEventListener('click', this.saveNoteToLocalStorage)
        this.saveNoteButtonElement.addEventListener('click', this.saveNoteToPC);
        this.modalElement.addEventListener('click', this.checkToClearModal);
        this.noteList.addEventListener('click', this.deleteItemEventListener);
    }

    this.newNote = (event) => {
        if(this.noteContent.value !== "") {
            this.modalElement.classList.add('has-text');
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

            this.clearNote();
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
        let content = this.noteContent.value; 
        let name = prompt("이름을 입력하세요");
        let file = new File([content], `${name}.txt`, {type: "text/plain;charset=utf-8"});
        saveAs(file);
    }

    this.clearNote = () => {
        this.noteContent.value = this.waitLoad;
        if(this.waitLoad !== "") this.waltLoad = "";
    }

    this.checkToClearModal = event => {
        let touchedElement = event.target;
        if(touchedElement.className.match(/has-text/) || touchedElement.className === this.newModalNoClassName) {
            this.modalElement.classList.remove('has-text');
        } else if(touchedElement.className === this.newModalYesClassName) {
            this.clearNote();
            this.modalElement.classList.remove('has-text');
        }
    }

    this.deleteItemEventListener = async event => {
        let touchedElement = event.target;
        console.log(touchedElement);
        if(touchedElement.classList.contains('note-item-delete')) {
            let number = parseInt(touchedElement.parentNode.key);
            if(number !== NaN) {
                this.note.data = this.note.data.filter(item => parseInt(item.id) !== number);
                this.note.length--;
                await localStorage.setItem("note", JSON.stringify(this.note));
                this.listItem();
            }
        } else if (touchedElement.classList.contains('note-item-content')) {
            this.waitLoad = touchedElement.innerText;
            this.newNote(event);
        }
    }

    this.init = async () => {
        this.note = await this.getNoteDataFromStorage();
        this.listItem();
    }

    this.setEventListener();
    this.init();

}