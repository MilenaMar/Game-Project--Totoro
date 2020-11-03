class Food {
    constructor() {
      this.x = random(0, WIDTH-40);
      this.y = 50;
      this.width = 50;
      this.height = 70;
    }
  
    draw() {
      this.y += speed;
      image(food,this.x, this.y, this.width, this.height);
    }


  }
  