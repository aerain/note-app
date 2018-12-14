function FullScreen(buttonElement, callback = null) {
    this.isFullScreen = false;
    this.buttonElement = buttonElement;
    
    /**
     * onChangeFullScreen
     * (function) callback
     * 
     * 풀스크린 감지할때 발동
     */
    this.onChangeFullScreen = (callback = null) => {
        if(callback !== null) 
            document.addEventListener('fullscreenchange', callback, false);
    }

    /** 
     * toggleFullScreen
     * element에 추가되는 이벤트리스너
     */
    this.toggleFullScreen = async (event) => {
        if(!this.isFullScreen) {
            await document.documentElement.requestFullscreen();
            this.isFullScreen = true;
        } else {
            await document.exitFullscreen();
            this.isFullScreen = false;
        }
    }

    /**
     * constructor
     */
    this.buttonElement.addEventListener('click', this.toggleFullScreen);
    this.onChangeFullScreen(callback);
}