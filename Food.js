class Food {
    constructor() {
      this.x = random(0, WIDTH);
      this.y = 50;
      this.width = 50;
      this.height = 70;
    }
  
    draw() {
      this.y += 2;
      image(food,this.x, this.y, this.width, this.height);
    }


  }
  