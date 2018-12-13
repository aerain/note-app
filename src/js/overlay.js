class AboutOverlay {
    constructor(aboutElement, overlay) {
        this.isVisible = false;

        this.aboutElement = aboutElement;
        this.overlay = overlay;
        this.content = overlay.querySelector('.about-layer');
        this.exitButton = overlay.querySelector('.overlay-exit');
        

        this.bindMethod = this.bindMethod.bind(this);
        this.bindMethod();
        
        this.aboutElement.addEventListener('click', this.toggleOverlay);
        this.exitButton.addEventListener('click', this.toggleOverlay);
    }

    bindMethod() {
        this.toggleOverlay = this.toggleOverlay.bind(this);
    }

    toggleOverlay() {
        if(!this.isVisible) {
            this.overlay.classList.add('overlay-toggle');
        } else {
            this.overlay.classList.remove('overlay-toggle');
        }
        this.isVisible = !this.isVisible;
    }
}