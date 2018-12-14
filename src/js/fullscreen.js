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

    /** 
     * toggleFullScreen
     * element에 추가되는 이벤트리스너
     */
    this.toggleFullScreen = async (event) => {
        try {
            if(!this.isFullScreen) {
                await document.documentElement.requestFullscreen();
                this.isFullScreen = true;
            } else {
                await document.exitFullscreen();
                this.isFullScreen = false;
            }
            if(this.callback !== null)
                this.callback();
        } catch(err) {
            console.log("전체 화면이 안되시는거 같은데요?");
        }
    }

    /**
     * constructor
     */
    this.buttonElement.addEventListener('click', this.toggleFullScreen);
}