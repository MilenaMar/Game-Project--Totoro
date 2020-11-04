class Player {
    constructor() {
      this.x = 0;
      this.y = 470;
      this.width = 100;
      this.height = 120;
      this.scoreCounter = 0; 
    }
  
    draw() {
      if (drawPlayer === true ) {
      image(dustTo, this.x, this.y, this.width, this.height);
      } else {
        image(totoro, this.x, this.y-7, this.width+10, this.height+10); 
      }
    }

    moveLeft() {
        if (this.x <= 0) {
          return;
        }
        drawPlayer=true;
        this.x -= 50;
      }
    
      moveRight() {
        if (this.x >= WIDTH - this.width) {
          return;
        }
        drawPlayer=true;
        this.x += 50;
      }
  }
  