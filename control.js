// Human Player Paddle

class Control {
    constructor (callbacks) {
      this.callbacks = callbacks;
      this.setKeyBindings();
    }
  
    setKeyBindings () {
      window.addEventListener('keydown', event => {
        const key = event.keyCode;
        if (key === 38 || key === 40){
          event.preventDefault();
          switch (key) {
            case 38:
              this.callbacks.up();
              break;
            case 40:
              this.callbacks.down();
              break;
          }
        }
      
    })
  }
}
