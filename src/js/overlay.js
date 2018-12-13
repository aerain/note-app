class AboutOverlay {
    constructor(aboutElement, overlay) {
        this.isVisible = false;

        this.overlay = overlay;
        this.content = overlay.querySelector('.about-layer')
        
        this.bindMethod = this.bindMethod.bind(this);
        this.bindMethod();
        
        this.setAboutOverLay(aboutOverlay);
        this.setAboutElement(aboutElement);
    }

    bindMethod() {
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.setAboutEventListener = this.setAboutEventListener.bind(this);
        this.setAboutElement = this.setAboutElement.bind(this);
        this.setAboutOverLay = this.setAboutOverLay.bind(this);
        this.pressAbout = this.pressAbout.bind(this);
    }

    toggleOverlay() {
        if(!this.isVisible) {
            this.overlay.classList.add('overlay-toggle');
        } else {
            this.overlay.classList.remove('overlay-toggle');
        }
        this.isVisible = !this.isVisible;
    }

    setAboutOverLay(aboutOverlay) {
        this.aboutOverlay = aboutOverlay;
    }

    setAboutElement(aboutElement) {
        this.aboutElement = aboutElement;
        if(aboutElement === null) {
            if(!this.aboutElement) {
                this.aboutElement = aboutElement;
            } else {
                console.log('올바른 요소가 들어가지 않았습니다.');
            }
        } else {
            this.setAboutEventListener(aboutElement);
        }       
    }

    setAboutEventListener(aboutElement) {
        if(this.aboutElement) {
            this.aboutElement.removeEventListener('click', this.pressAbout);
        }
        this.aboutElement = aboutElement;
        this.aboutElement.addEventListener('click', this.pressAbout);
    }

    pressAbout(event) {
        if(this.aboutOverlay !== null) {
            this.toggleOverlay();
        } else {
            console.log('오버레이 할당이 되지 않았습니다.');
        }
    }
}