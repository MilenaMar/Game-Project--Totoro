class LevelDust extends Dust {
    draw() {
      this.y += speed;
      image(enemydust,this.x, this.y, this.width, this.height);
    }
  }