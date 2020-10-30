class Player {
    constructor() {
      this.x = 0;
      this.y = 450;
      this.width = 120;
      this.height = 140;
    }
  
    draw() {
      image(totoro, this.x, this.y, this.width, this.height);
    }
  }
  