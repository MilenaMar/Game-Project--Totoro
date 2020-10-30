class Dust {
    constructor() {
      this.x = 15;
      this.y = 450;
      this.width = 50;
      this.height = 40;
    }
  
    draw() {
      image(dust,this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        if (this.x <= 0) {
          return;
        }
        this.x -= 30;
      }
    
      moveRight() {
        if (this.x >= WIDTH - this.width) {
          return;
        }
        this.x += 30;
      }
  }
  