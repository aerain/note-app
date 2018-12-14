function AboutOverlay(aboutElement, overlay, toggleClassName) {
    this.isVisible = false;

    this.aboutElement = aboutElement;
    this.overlay = overlay;
    this.toggleClassName = toggleClassName;

    this.content = overlay.querySelector('.about-layer');
    this.exitButton = overlay.querySelector('.overlay-exit');

    this.toggleOverlay = () => {
        if(!this.isVisible) {
            this.overlay.classList.add(this.toggleClassName);
        } else {
            this.overlay.classList.remove(this.toggleClassName);
        }
        this.isVisible = !this.isVisible;
    }
    
    this.aboutElement.addEventListener('click', this.toggleOverlay);
    this.exitButton.addEventListener('click', this.toggleOverlay);

    
}