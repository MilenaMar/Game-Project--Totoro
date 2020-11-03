class Dust {
    constructor() {
      this.x = random(0, WIDTH-40);
      this.y = 50;
      this.width = 50;
      this.height = 40;
    }
  
    draw() {
      this.y += speed;
      image(dust,this.x, this.y, this.width, this.height);
    }
  }
  