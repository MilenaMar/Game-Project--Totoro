class Dust {
    constructor() {
      this.x = random(0, WIDTH);
      this.y = 50;
      this.width = 50;
      this.height = 40;
    }
  
    draw() {
      this.y += 3;
      image(dust,this.x, this.y, this.width, this.height);
    }
  }
  