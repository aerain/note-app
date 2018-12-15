function FullScreen(buttonElement, callback = null) {
    this.isFullScreen = false;
    this.buttonElement = buttonElement;
    this.callback = callback;
    
    /**
     * onChangeFullScreen
     * (function) callback
     * 
     * 풀스크린 감지할때 발동
     */
    this.setOnChangeFullScreen = (callback = null) => {
        this.callback = callback;
    }

    this.onChangeFullScreen = () => {
        if(this.callback !== null)
            this.callback();
        this.isFullScreen = !this.isFullScreen;
    }
    /** 
     * toggleFullScreen
     * element에 추가되는 이벤트리스너
     */
    this.toggleFullScreen = async (event) => {
        try {
            if(!this.isFullScreen) {
                await document.documentElement.requestFullscreen();
            } else {
                await document.exitFullscreen();
            }
        } catch(err) {
            console.log(err);
        }
    }

    /**
     * constructor
     */
    this.buttonElement.addEventListener('click', this.toggleFullScreen);
    document.addEventListener('fullscreenchange', this.onChangeFullScreen);
}