class Food {
    constructor() {
      this.x = 250;
      this.y = 450;
      this.width = 50;
      this.height = 70;
    }
  
    draw() {
      image(food,this.x, this.y, this.width, this.height);
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
  