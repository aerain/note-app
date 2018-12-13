class FullScreen {
    constructor(fullScreenElement) {
        this.isFullScreen = false;
        
        this.bindMethod = this.bindMethod.bind(this);
        this.bindMethod();

        this.fullScreenElement = fullScreenElement;
        this.init();
    }
    
    init() {
        this.fullScreenElement.addEventListener('click', this.toggleFullScreen);
        this.changeFullScreenIcon();
    }
    bindMethod() {
        this.toggleFullScreen = this.toggleFullScreen.bind(this);
        this.changeFullScreenIcon = this.changeFullScreenIcon.bind(this);
    }

    changeFullScreenIcon() {
        document.addEventListener('fullscreenchange', () => {
            if(this.fullScreenElement.querySelector('i').innerText == "fullscreen") {
                this.fullScreenElement.querySelector('i').innerText = "fullscreen_exit";
                this.isFullScreen = true;
            } else {
                this.fullScreenElement.querySelector('i').innerText = "fullscreen";
                this.isFullScreen = false;
            }
        }, false);
    }

    async toggleFullScreen(event) {
        if(!this.isFullScreen) {
            console.log('love');
            await document.documentElement.requestFullscreen();
        } else {
            console.log("babo")
            await document.exitFullscreen();
        }
    }

    setFullScreenEventListener(fullScreenElement) {
        if(this.fullScreenElement) {
            this.fullScreenElement.removeEventListener('click', this.toggleFullScreen);
        }
        this.fullScreenElement = fullScreenElement;
        this.fullScreenElement.addEventListener('click', this.toggleFullScreen);
    }
    
}